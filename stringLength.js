const stringLength = (char) => {
    const length = char.length;
    if (length < 1 || length > 10) {
      throw new Error('Invalid string length!');
    }
    return length;
}

module.exports = stringLength;