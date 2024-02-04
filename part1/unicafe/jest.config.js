export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  }
}
