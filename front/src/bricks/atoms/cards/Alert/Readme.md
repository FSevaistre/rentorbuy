### Import
```js static
import { Alert } from 'pretto-ui'
```

### Usage
```html
<Alert>
  <header>I am an alert</header>
  <p>With some text in it</p>
</Alert>

```
### Examples
#### Basic:
```jsx
<Alert>
  <header>I am an alert</header>
  <p>With some text in it</p>
</Alert>
```

#### variant: error
```jsx
<Alert variant="dark--error">
  <header>I am an alert</header>
  <p>With some text in it</p>
</Alert>
```

#### format: banner
```jsx
const styles = {
  position: "relative"
};
const headerStyles = {
  background: "#d7efe4",
  padding: 16
};
const contentStyles = {
  width: "80%",
  margin: "0 auto"
};
<div style={styles}>
  <header style={headerStyles}>
    <h1>Header of page</h1>
  </header>
  <Alert variant="dark--error" format="banner">
    <header>Batman Ipsum Rocks!</header>
    <p>Deal with it!</p>
  </Alert>
  <div style={contentStyles}>
    <h2 style={{fontSize: 24, margin: "24px 0"}}>I'm batman!</h2>
    <p>It's not just your name, sir. It's your father's name. And it's all that's left of him. Don't destroy it.

    Does it come in black?

    My anger outweights my guilt.

    I speak for the rest of the board and Mr Wayne, in expressing our own excitement.

    I seek the means to fight injustice. To turn fear against those who prey on the fearful.

    Accomplice? I'm gonna tell them the whole thing was your idea.

    What if, before she died, she wrote a letter saying she chose Harvey Dent over you? And what if, to spare you pain, I burnt that letter?

    Now choice is yours: exile or death?

    It was a dog. It was a big dog.

    I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.

    Every man who has lotted here over the centuries, has looked up to the light and imagined climbing to freedom. So easy, so simple! And like shipwrecked men turning to seawater foregoing uncontrollable thirst, many have died trying. And then here there can be no true despair without hope. So as I terrorize Gotham, I will feed its people hope to poison their souls. I will let them believe that they can survive so that you can watch them climbing over each other to stay in the sun. You can watch me torture an entire city. And then when you've truly understood the depth of your failure, we will fulfill Ra's Al Ghul's destiny. We will destroy Gotham. And then, when that is done, and Gotham is... ashes Then you have my permission to die.

    Gotham's time has come.

    I thought this might be a good opportunity for... improving the foundations.

    Behind you, stands a symbol of oppression. Blackgate Prison, where a thousand men have languished under the name of this man: Harvey Dent.</p>
  </div>
</div>
```
