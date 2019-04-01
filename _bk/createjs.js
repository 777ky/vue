let
// createjs=null,
easeljs=null,
tweenjs=null


if (process.client) {
  // createjs = require('@createjs/core')
  easeljs = require('@createjs/easeljs')
  tweenjs = require('@createjs/tweenjs')
}

export default ({ app }, inject) => {
    // @Usage:this.$createjs...
    // inject('createjs', createjs )
    inject('easeljs', easeljs )
    inject('tweenjs', tweenjs )

}


