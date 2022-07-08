import styled from "styled-components";

export const Container = styled.View`
    backgroundCOlor: #fff;
    marginTOp: 20px;
    width: 100%;
`;

export const TextItem = styled.Text`
    fontSize: 20px;
`;

export const ContainerBtn = styled.View`
    flexDirection: row-reverse;
    alignItems: flex-end;
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    paddingBottom: 10px;
    marginTop: 10px;
`;

export const DelBtn = styled.TouchableOpacity`
    marginLeft: 10px;
    height: 40px;
    width: 40px;
    backgroundColor: #ec2300;
    borderRadius: 10px;
    padding: 10px;
    fontSize: 12px;
    elevation: 10;
    shadowOpacity: 10;
    shadowColor: #ccc;
    alignItems: center;
`;

export const EditBtn = styled.TouchableOpacity`
marginLeft: 10px;
height: 40px;
backgroundColor: blue;
borderRadius: 10px;
padding: 10px;
fontSize: 12px;
elevation: 10;
shadowOpacity: 10;
shadowColor: #ccc;
alignItems: center;
`;

export const BtnText = styled.Text`
    color: #fff;
    fontWeight: bold;
`;