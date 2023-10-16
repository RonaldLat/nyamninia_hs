import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bounce from 'gsap/EasePack';
import { SlowMo } from 'gsap/EasePack';

gsap.registerPlugin(ScrollTrigger);

Bounce;

export function scrowlly(node) {
  let tl;
  gsap.from(node, {
    scrollTrigger: node,
    x: 500
  });

  return {
    destroy() {
      tl = null;
    }
  };
}
export function example(node, delay=0.3) {
  let tl = gsap.timeline({
    delay:delay,
    scrollTrigger: {
      trigger: node,
      start: 'top 80%',
      end: `+=${node.offsetHeight}`,
    },
    onComplete: tweenComplete
  });
  tl.from(node, { x: 600, duration: 1, stagger: 0.5 }, '<');
  tl.from(node, { opacity: 0, duration: 2, stagger: 0.5 }, '<');

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}
// fade
export function gFade(node) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: 10,
      end: `+=${node.offsetHeight}`,
      scrub: 2
      //markers: true
    },
    onComplete: tweenComplete
  });
  tl.from(node, { opacity: 0, duration: 2 }, '<');

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}


export function gFromDown (node, delay=0.3) {
  let tl = gsap.timeline({
    delay:delay,
    scrollTrigger: {
      trigger: node,
      start: 'top 80%',
      end: `+=${node.offsetHeight}`,
    },
    onComplete: tweenComplete
  });
  tl.from(node, { yPercent: -50, duration: 1 }, '<');
  //tl.from(node, { opacity: 0, duration: 2, }, '<');

  function tweenComplete() {
    node.dispatchEvent(new CustomEvent('tweenComplete'));
  }

  return {
    destroy() {
      tl = null;
    }
  };
}