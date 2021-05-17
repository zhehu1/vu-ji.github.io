import { FC } from 'react'
import { Typography } from 'antd';

// const { Title, Paragraph, Text } = Typography;
const { Title } = Typography;

const Index: FC = () => {
    // const [ellipsis, setEllipsis] = React.useState(true);

    return <>
        <Title level={2}>首页内容</Title>
        {/* <Title level={2}>h2.h2 title</Title>
        <Switch
            checked={ellipsis}
            onChange={() => {
                setEllipsis(!ellipsis);
            }}
        />

        <Paragraph ellipsis={ellipsis}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
        >
        Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Text> */}
    </>
}

export default Index