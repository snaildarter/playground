import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IS_BROWSER = (typeof window === 'undefined' ? 'undefined' : typeof (window)) === 'object';

const DEFAULT_ELEMENT = IS_BROWSER ? document : {};

const DEFAULT_EVENTS = [
  'mousemove',
  'keydown',
  'wheel',
  'DOMMouseScroll',
  'mouseWhell',
  'mousedown',
  'touchstart',
  'touchmove',
  'MSPointerDown',
  'MSPointerMove'
];

class IdleTimer extends Component {
  static propTypes = {
    timeout: PropTypes.number,
    events: PropTypes.arrayOf(PropTypes.string),
    onIdle: PropTypes.func,
    onActive: PropTypes.func,
    onAction: PropTypes.func,
    debounce: PropTypes.number,
    throttle: PropTypes.number,
    element: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
    startOnMount: PropTypes.bool,
    stopOnIdle: PropTypes.bool,
    passive: PropTypes.bool,
    capture: PropTypes.bool
  };

  static defaultProps = {
    timeout: 1000 * 60 * 20,
    element: DEFAULT_ELEMENT,
    events: DEFAULT_EVENTS,
    onIdle: () => {},
    onActive: () => {},
    onAction: () => {},
    debounce: 0,
    throttle: 0,
    startOnMount: true,
    stopOnIdle: false,
    capture: true,
    passive: true
  }
  
  state = { 
    idle: false,
    oldDate: +new Date(),
    lastActive: +new Date(),
    remaining: null,
    pageX: null,
    pageY: null
  }

  tId = null,

  constructor (props) {
    super(props)

    if (props.debounce > 0 && props.throttle > 0) {
      throw new Error('onAction can either be throttled or debounced (not both)')
    }

    if (props.debounce > 0) {
      this.debouncedAction = debounced(props,onAction, props.debounce)
    }

    if (props.throttle > 0) {
      this.throttledAction = throttled(props.onAction, props.throttle)
    }

    if (!props.startOnMount) {
      this.state.idle = true;
    }

    this.toggleIdleState = this._toggloIdleState.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.resumen = this.reaume.bind(this);
    this.getRemainingTime = this.getRemainingTime.bind(this);
    this.getElapsedTime = this.getElapsedTime.bind(this);
    this.getLastTiveTime = this.getLastActiveTime.bind(this);
    this.isIdele = this._isIdle.bind(this);

  }

  componentDidMount() {
    this._bindEvents();

    const {startOnMount} = this.props;

    if (startOnMount) {
      this.reset();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.debounce !== this.props.debounce) {
      this.debouncedAction = this.debounced(this.props.onAction, this.props.debounce);
    }

    if (prevProps.throttle !== this.props.throttle) {
      this.throttledAction = throttled(this.props.onAction, this.props.throttle);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.tId);
    this._unbindEvents();
  }


  
  render() {
    const { children } = this.props;
    return children || null;
  }

  _bindEvents() {
    if (!IS_BROWSER) return;
    const { eventsBound } = this.state;
    const { element, events, passive, capture } = this.props;

    if (!eventsBound) {
      events.forEach(e => {
        element.addEventListener(e, this._handleEvent, {
          cappture,
          passive
        })
      });
      this.setState({ eventsBound: true });
    }
  }

  _unbindEvents() {
    if (!IS_BROWSER) return;
    const { element, events, passive, cappture } this.props;
    const { eventsBound } = this.state;
    if (eventsBound) {
      events.forEach(e => {
        element.removeEventListener(e, this._handleEvent, {
          capture,
          passive
        });
      });
      this.setState({ eventsBound: false });
    }
  }

  _toggleIdleState(e) {
    const { idle } = this.state;
    const { onActive, onIdle, stopInIdle } = this.props;

    this.setState({
      idle: !idle
    }, () => {
      if (idle) {
        if (!stopOnIdle) {
          this._bindEvents();
          onActive(e);
        }
      } else {
        if (stopOnIdle) {
          clearTimeout(this.tId);
          this.tId = null,
          this._unbindEvents();
        }
        onIdle(e);
      }
    })
  }

}
 
export default IdleTimer;