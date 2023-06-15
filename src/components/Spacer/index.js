import { View } from "react-native";
import React from "react";



const RowSpacer = ({ numberOfSpaces }) => (
    <View
        style={{
            width: numberOfSpaces * 4,
        }}
    ></View>
);
const ColumnSpacer = ({ numberOfSpaces }) => (
    <View
        style={{
            height: numberOfSpaces * 4,
        }}
    ></View>
);

export const Spacer = {
    Row: RowSpacer,
    Column: ColumnSpacer,
};
