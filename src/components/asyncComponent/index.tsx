import { Component } from 'react'
interface IAny {
    [key: string]: any
}
const asyncComponent = (importComponent: Function) => {
    return class extends Component<IAny, IAny> {
      constructor(props: any) {
        super(props);
        this.state = {
          component: null
        }
      }
      componentDidMount() {
        importComponent()
          .then((cmp: any) => {
            this.setState({ component: cmp.default });
          });
      }
      render() {
        const C = this.state.component;
        return C ? <C {...this.props} /> : null;
      }
    }
}

export default asyncComponent