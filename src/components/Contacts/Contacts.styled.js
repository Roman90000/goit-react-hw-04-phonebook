import { styled } from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.div`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto 20px;
  display: flex;
`;

export const ItemBtn = styled.button`
  margin-left: auto;
  display: block;
  width: 60px;
`;

export const ItemName = styled.span`
  margin-right: 10px;
`;
