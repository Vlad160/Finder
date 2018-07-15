import React, { ReactNode, Component } from 'react';
import { Header, Left, Body, Title, Right } from 'native-base';

export default class TopHeader extends Component {

    render(): ReactNode {
        return (
            <Header>
                <Left />
                <Body>
                    <Title>Welcome!</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}