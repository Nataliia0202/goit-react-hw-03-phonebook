import PropTypes from 'prop-types';
import { IconButtonSt } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
    <IconButtonSt type="button" onClick={onClick} {...allyProps}>
      {children}
    </IconButtonSt>;
}
IconButton.defaultProps = {
    onClick: () => null,
    children: null,
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string,
}