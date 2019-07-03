import React, { Component } from 'react'
import './Theme.scss'

export default class Theme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      copiedClass: 'hidden'
    }
  }
  handleCopy = name => () => {
    const copyTextarea = document.querySelector('.' + name + ' input')
    copyTextarea.select()
    document.execCommand('copy')
    this.setState({
      color: name,
      copiedClass: 'visible'
    })
    window.setTimeout(() => {
      this.setState({ copiedClass: 'hidden' })
    }, 300)
  }
  render() {
    const colors = [
      {
        name: 'Primary',
        colors: ['primary-1-l', 'primary-1', 'primary-1-d']
      },
      {
        name: 'Neutral',
        colors: ['neutral-1-l', 'neutral-1', 'neutral-1-d']
      },
      {
        name: 'Accent 1',
        colors: ['accent-1-l', 'accent-1', 'accent-1-d']
      },
      {
        name: 'Accent 2',
        colors: ['accent-2-l', 'accent-2', 'accent-2-d']
      },
      {
        name: 'Accent 3',
        colors: ['accent-3-l', 'accent-3', 'accent-3-d']
      },
      {
        name: 'Accent 4',
        colors: ['accent-4-l', 'accent-4', 'accent-4-d']
      },
      {
        name: 'Accent 5',
        colors: ['accent-5-l', 'accent-5', 'accent-5-d']
      }
    ]
    const alerts = [
      {
        name: 'Success',
        colors: ['success-l', 'success']
      },
      {
        name: 'Error',
        colors: ['error-l', 'error']
      }
    ]

    const gradients = [
      {
        name: 'Primary 1',
        colors: ['gradient-primary-1']
      },
      {
        name: 'Primary 2',
        colors: ['gradient-primary-2']
      },
      {
        name: 'Accent 1',
        colors: ['gradient-accent-1']
      }
    ]
    const copiedClass = `copied ${this.state.copiedClass}`
    const copied = <div className={copiedClass}>{this.state.color} copied</div>
    return (
      <div className="pretto-ui-theme">
        <section>
          <h2>Colors</h2>
          <p>Click color to copy to clipboard</p>
          <div>
            <h3>Panel</h3>
            <ul className="styleguide-colors">
              {colors.map(color => {
                return (
                  <li key={color.name}>
                    <h4>{color.name}</h4>
                    <ul>
                      {color.colors.map(name => {
                        const colorClass = `color ${name}`
                        const contentCopied = this.state.color === name ? copied : null
                        return (
                          <li className={colorClass} key={name} onClick={this.handleCopy(name)}>
                            {contentCopied}
                            <code>{name}</code>
                            <input type="text" defaultValue={name} />
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3>Alerts</h3>
            <ul className="styleguide-colors">
              {alerts.map(color => {
                return (
                  <li key={color.name}>
                    <h4>{color.name}</h4>
                    <ul>
                      {color.colors.map(name => {
                        const colorClass = `color ${name}`
                        const contentCopied = this.state.color === name ? copied : null
                        return (
                          <li className={colorClass} key={name} onClick={this.handleCopy(name)}>
                            {contentCopied}
                            <code>{name}</code>
                            <input type="text" defaultValue={name} />
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3>Gradients</h3>
            <ul className="styleguide-colors">
              {gradients.map(color => {
                return (
                  <li key={color.name}>
                    <h4>{color.name}</h4>
                    <ul>
                      {color.colors.map(name => {
                        const colorClass = `color ${name}`
                        const contentCopied = this.state.color === name ? copied : null
                        return (
                          <li className={colorClass} key={name} onClick={this.handleCopy(name)}>
                            {contentCopied}
                            <code>{name}</code>
                            <input type="text" defaultValue={name} />
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section>
          <h2>Texts</h2>
          <div className="heading--small">Heading small</div>
          <div className="subheading--small">Sub-heading small</div>
          <div className="heading--medium">Heading medium</div>
          <div className="subheading--medium">Sub-heading medium</div>
          <div className="heading--large">Heading large</div>
          <div className="subheading--large">Sub-heading large</div>
          <p className="current-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ex et quam auctor maximus. Aliquam
            sed auctor felis. Fusce luctus quam in mi dignissim, sed faucibus risus scelerisque. Quisque non convallis
            justo. Etiam nunc arcu, feugiat luctus tellus nec, pulvinar auctor sapien. Fusce sed nibh quis nunc accumsan
            iaculis sit amet elementum leo. Morbi facilisis sem et velit feugiat congue. Aenean pharetra orci ornare
            augue placerat egestas. Sed placerat libero justo, nec facilisis sapien vulputate eget. Cras luctus nunc sed
            purus finibus tempor. In tristique posuere eleifend. Morbi pretium, est vitae interdum aliquet, mauris erat
            tempor sapien, non vestibulum erat elit at nisl. Pellentesque arcu libero, porta id nisi et, luctus iaculis
            urna. Maecenas sed bibendum augue. Maecenas malesuada orci nec tortor placerat, a ultrices diam pulvinar.
            Curabitur eu erat a enim hendrerit tincidunt.
          </p>
        </section>
      </div>
    )
  }
}
