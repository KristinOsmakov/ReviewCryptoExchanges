import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
  ref={ref} 
  width={'16px'}
  height={'16px'}
  viewBox="0 0 64 64" 
  fill='red'
  xmlns="http://www.w3.org/2000/svg"
  {...props}
  >
    <g id="Layer_49" data-name="Layer 49"><path d="m61.35 13.34a1.51 1.51 0 0 0 -1.35-.84h-56a1.51 1.51 0 0 0 -1.35.84 1.49 1.49 0 0 0 .17 1.58l28 36a1.49 1.49 0 0 0 2.36 0l28-36a1.49 1.49 0 0 0 .17-1.58z"></path></g></svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
