import React from 'react'

export const showHide = (showAt = true) => {
  class ShowHide extends React.Component {
    constructor(props) {
      super(props);

      this.breakpoints = {
        withinExtraSmall: 543,
        /**/
        smallAndAbove: 544,
        withinSmall: 767,
        /**/
        mediumAndAbove: 768,
        withinMedium: 991,
        /**/
        largeAndAbove: 992,
        withinLarge: 1199,
        /**/
        extraLargeAndAbove: 1200
      }

      this.state = {
        show: true
      }
      
      this.onResize = this.onResize.bind(this)
    }

    componentWillMount() {
      window.addEventListener('resize', this.onResize, false)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize)
    }

    componentDidMount() {
      this.onResize()
    }

    onResize() {
      const useMin = this.props.breakpoint.indexOf('AndAbove') > -1
      const useMax = this.props.breakpoint.indexOf('within') > -1
      const matchedBreakpoint = this.breakpoints[this.props.breakpoint]

      if (typeof matchedBreakpoint === typeof 1) {
        const andAbove = window.innerWidth >= matchedBreakpoint
        const within = window.innerWidth <= matchedBreakpoint

        let show = true;

        if (useMin && within) {
          show = this.showAt
        } else if (useMin && !within) {
          show = !this.showAt
        } else if (useMax && andAbove) {
          show = this.showAt
        } else if (useMax && !andAbove) {
          show = !this.showAt
        }

        this.setState({ show })
      }
    }

    render () {
      return this.state.show ? this.props.children : null;
    }
  }

  ShowHide.displayName = showAt ? 'ShowAt' : 'HideAt'

  return ShowHide
}