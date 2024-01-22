import gsap, {  Expo } from 'gsap'

class Transition {
  public static in(target: any, callback: () => void) {
    console.log('target', target)
    gsap.fromTo(target, { duration: 0.5, y: 500, opacity: 0.1 }, { duration: 0.5, y: 0, opacity: 1, ease: Expo.easeOut, onComplete: () => callback() })
  }

  public static out(target: any, callback: () => void) {
    gsap.fromTo(target, { duration: 0.5, y: 0.1, opacity: 1 }, { duration: 0.5, y: 50, opacity: 0, ease: Expo.easeIn, onComplete: () => callback() })
  }

  public static scaleYCallape(target: any, callback: () => void) {
    gsap.fromTo(target, { duration: 0.5, scaleY: 1 }, { duration: 0.5, scaleY:0,  ease: Expo.easeIn, onComplete: () => callback() })
  }

  public static heightAnim(context: any, callback: () => void) {
    gsap.fromTo(context.target, { duration: context.time, height: context.startHeight, y: context.startPositionY, opacity: context.startOpacity }, { duration: context.time, height: context.endHeight, y: context.endPositionY, opacity: context.endOpacity, ease: context.ease === 'in' ? Expo.easeIn : Expo.easeOut, onComplete: () => callback() })
  }

  public static positionAnim(context: any, callback: () => void) {
    const end = { ...context.end, duration: context.time }
    end.ease = Expo.easeInOut
    end.onComplete = () => callback()
    gsap.fromTo(context.target, {...context.start, duration: context.time}, end)
  }
}

export default Transition
