var React = require('react'),
    Overlay = require('./Overlay');

export default class OverlayTrigger extends Overlay {
  static propTypes = {
    overlay: React.PropTypes.node
  }

  constructor(props) {
    super(props);
    this.state = {isOverlayShown: false};
    this.toggle = this.toggle.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
  }

  render() {
    var {overlay, children, ...props} = this.props;
    var child = React.Children.only(children);
    return React.cloneElement(
      child,
      {onClick: this.toggle}
    );
  }

  renderOverlay() {
    if (!this.state.isOverlayShown) {
      return <span />;
    }
    return this.props.overlay;
  }

  toggle() {
    this.setState({isOverlayShown: !this.state.isOverlayShown});
  }
}