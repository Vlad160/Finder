import React from "react";
import { observer } from "mobx-react";
import { View, TextInput, Text } from "react-native";

@observer
export default class Reactive extends React.Component<any, any> {

    setValue = (text: string) => {
        console.log(text);
        this.props.store.value = text;
    }

    render() {
        const { store } = this.props;
        return (
            <View>
                <TextInput placeholder="Type here..." value={store.value} onChangeText={this.setValue} />
                <Text>{store.value}></Text>
            </View>
        )
    }
}