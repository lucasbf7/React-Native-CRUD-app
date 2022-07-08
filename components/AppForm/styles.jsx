import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    backgroundColor: #57ad12;
    alignItems: center;
`;

export const Title = styled.Text`
    color: #fff;
    fontSize: 20px;
    fontWeight: bold;
    marginTop: 50px;
`;

export const InputContainer = styled.View`
    flex: 1;
    marginTop: 30px;
    width: 90%;
    padding: 20px;
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
    alignItems: stretch;
    backgroundColor: #fff;
`;

export const Input = styled.TextInput`
    marginTop: 10px;
    height: 60px;
    backgroundColor: #fff;
    borderRadius: 10px;
    paddingHorizontal: 25px;
    fontSize: 16px;
    alignItems: stretch;
`;

export const Btn = styled.TouchableOpacity`
    marginTop: 10px;
    height: 60px;
    backgroundColor: blue;
    borderRadius: 10px;
    paddingHorizontal: 25px;
    fontSize: 16px;
    alignItems: center;
    justifyContent: center;
    elevation: 20;
    shadowOpacity: 20;
    shadowColor: #ccc;
`;

export const BtnText = styled.Text`
    color: #fff;
    fontWeight: bold;
`;