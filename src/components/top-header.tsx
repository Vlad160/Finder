import React, { ReactNode, Component } from 'react';
import { Header, Left, Body, Title, Right, Button, Icon } from 'native-base';
import { withRouter } from 'react-router';

@withRouter
export default class TopHeader extends Component<any> {

    constructor(props: any) {
        super(props);
    }
    render(): ReactNode {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.history.goBack()}>
                        <Icon type='Entypo' name='arrow-left' />
                    </Button>
                </Left>
                <Body>
                    <Title>Welcome!</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}