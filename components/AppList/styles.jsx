import styled from "styled-components";

export const Container = styled.View`
 flex: 1;
 backgroundColor: #ec2300;
 alignItems: center;
 justifyContent: center;
`;

export const Title = styled.Text`
    color: #fff;
    fontSize: 20px;
    fontWeight: bold;
    marginTop: 50px;
    marginBottom: 20px;
`;

export const ScrollContainer = styled.ScrollView.attrs(props => ({
    contentContainerStyle: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    }
}))`
    flex: 1;
    width: 90%;
`;