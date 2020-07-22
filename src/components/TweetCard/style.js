import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: .25rem;
  color: #707f8c;
  word-wrap: break-word;
  white-space: normal;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    padding-bottom: 5px;
    margin-bottom: 5px;
    align-items: center;

    .title {
      flex: 1;
      color: #707f8c;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    
    .btn-action {
      width: 30px;
      padding: 3px;
      text-align: center;
      border: none;
      background: none;
      outline: none;
    }
    
    .picture {
      overflow: hidden;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      margin-right: 5px
    }
    
    .screen-name {
      color: #707f8c;
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .name {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;