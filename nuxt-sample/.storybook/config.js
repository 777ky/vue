import { configure } from '@storybook/vue'

const loadStories = () => {
  require("../stories/index.stories.js")
}

configure(loadStories, module)
