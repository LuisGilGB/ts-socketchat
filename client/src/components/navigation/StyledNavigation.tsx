import styled from '../../theme';

const StyledNavigation = styled('div')`
    width: 100%;
    z-index: 1;
    position: fixed;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.secondaryLightColor}
`;

export default StyledNavigation;