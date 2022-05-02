import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 16px;
`;

export const AdsContainer = styled.div`
  ${(props) => css`
    background: transparent url(${props.gif}) no-repeat center;
    background-size: contain;

    height: 180px;
  `}
`;

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;

  > img {
    width: 192px;
    height: 192px;

    border-radius: 16px;
  }
`;

export const ProfileInfo = styled.section`
  margin-left: 16px;

  ul {
    list-style: none;
    margin-top: 16px;

    li {
      img {
        height: 32px;
        width: 32px;

        margin-right: 8px;
      }

      a {
        display: flex;
        align-items: center;

        color: inherit;
        text-decoration: none;
      }

      & + li {
        margin-top: 16px;
      }
    }
  }
`;

export const TechnologyContainer = styled.div`
  max-width: 512px;
  margin: 8px auto;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
    gap: 24px 16px;

    list-style: none;

    li {
      padding: 8px;
      background: #302f3d;
      border-radius: 8px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

      text-align: center;

      font-family: "Montserrat", sans-serif;
      font-weight: bold;
    }
  }
`;

export const ProjectsContainer = styled.section`
  margin-top: 24px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 24px 16px;

    list-style: none;
  }
`;

export const ProjectItem = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #302f3d;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  width: 450px;

  padding: 16px;

  color: rgba(255, 255, 255, 0.8);

  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;

    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: inherit;

      img {
        height: 32px;
        width: 32px;

        margin-right: 8px;
      }

      &:hover {
        color: #04d361;
      }
    }
  }

  &:hover {
    /* color: #fd951f; */

    border-color: rgba(255, 255, 255, 0.3);
  }

  & + li {
    /* margin-top: 16px; */
  }
`;
