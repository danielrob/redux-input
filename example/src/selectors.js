const basicExampleStore = (state) => ({
  basic: { example: { input: state.basic.example.input } }
})
const basicExampleInput = (state) => state.basic.example.input
const actOnExampleStore = (state) => ({
  actOn: { example: { input: state.actOn.example.input } }
})
const actOn = (state) => state.actOn
const contextExampleStore = (state) => ({
  contextExample: {
    example: {
      input1: state.contextExample.example.input1,
      input2: state.contextExample.example.input2
    },
  }
})
const contextExample = (state) => state.contextExample

const selectors = {
  basicExampleStore,
  basicExampleInput,
  actOnExampleStore,
  actOn,
  contextExampleStore,
  contextExample,
}

export default selectors
