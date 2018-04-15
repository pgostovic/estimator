/**
 * Utility for expressing colours in a consistent way while not having to
 * worry about conversions between hex and rgb. To toString() function
 * is useful for embedding instances in string templates -- i.e. when using
 * StyledComponents. The output will generate an html hex colour value by
 * default, but will switch to rgba() if a non-1 alpha channel is set.
 *
 * Example of use in styled component:
 *
 *    const red = new Color('#f00);
 *
 *    const RedLabel = styled.label`
 *      color: ${red};
 *      background-color: ${red.alpha(0.5)};
 *    `;
 *
 * In this case the generated CSS attributes would be:
 *
 *    color: #ff0000;
 *    background-color: rgba(255, 0, 0, 0.5);
 */

const padHex = num => (`00${num.toString(16)}`).substr(-2);
const isBadNum = (num, max) => (typeof num !== 'number' || num < 0 || num > max);

export default class Color {
  constructor(...args) {
    if (args.length === 1 && typeof args[0] === 'string' && args[0].charAt(0) === '#') {
      const comps3 = args[0].match(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/i);
      if (comps3) {
        this.r = parseInt(`${comps3[1]}${comps3[1]}`, 16);
        this.g = parseInt(`${comps3[2]}${comps3[2]}`, 16);
        this.b = parseInt(`${comps3[3]}${comps3[3]}`, 16);
        this.a = 1;
      } else {
        const comps6 = args[0].match(/^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
        if (comps6) {
          this.r = parseInt(comps6[1], 16);
          this.g = parseInt(comps6[2], 16);
          this.b = parseInt(comps6[3], 16);
          this.a = 1;
        } else {
          throw new Error('Invalid Color arguments: ', args.join(', '));
        }
      }
    } else if (args.length === 3 || args.length === 4) {
      const [r, g, b, a] = args;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a || 1;
    } else {
      throw new Error('Invalid Color arguments: ', args.join(', '));
    }

    if (isBadNum(this.r, 255) || isBadNum(this.g, 255) || isBadNum(this.b, 255) || isBadNum(this.a, 1)) {
      throw new Error('Invalid Color arguments: ', args.join(', '));
    }
  }

  alpha(alpha) {
    const {
      r, g, b,
    } = this;
    return new Color(r, g, b, alpha);
  }

  toString() {
    const {
      r, g, b, a,
    } = this;

    if (a === 1) {
      return `#${padHex(r)}${padHex(g)}${padHex(b)}`;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}
