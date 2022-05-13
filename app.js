import { colorUI } from './config/ColorUI'
import { colorUISdk } from './config/mp-sdk'

App({
    colorUI,//挂载到app上
    colorUISdk,
    onLaunch() {
        //console.log(colorUISdk.isRandom.getRandom(6))
        //console.log(colorUISdk.version)
        //console.log(colorUISdk.numberFormat(1000000))
    },
    onShow() {
        
    }
})
