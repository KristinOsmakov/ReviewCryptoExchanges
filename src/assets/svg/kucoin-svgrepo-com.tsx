import { Ref, SVGProps, forwardRef, memo } from 'react';

const KucoinLogo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2286.76 2500.03" width="25" height="25"><title>kcs</title><path d="M1924.48 1522.23l-468.47 466.28-747.84-739.81 746.41-738.61 469.9 467.7c83.34 82.63 217.92 82.63 300.54-.72s82.26-217.92-.72-300.54L1606.62 61.74c-83.34-82.62-217.92-82.26-300.54.72-.34.34-15.07 12.57-21.65 19.12L425.02 931.75V423.61c0-117.25-95.25-212.5-212.51-212.5S.36 306.36 0 423.61v1651.4c0 117.26 95.25 212.51 212.51 212.51s212.51-95.29 212.51-212.51v-509.26l859.41 850.17c3.71 3.69 18.08 18.05 21.65 21.65 82.62 83 217.2 83.34 300.54.72l617.68-614.8c83-82.62 83.34-217.19.72-300.54-82.98-82.94-217.56-83.34-300.54-.72z" fill="#24ae8f"/><circle cx="1457.97" cy="1250.2" r="214.31" fill="#24ae8f"/></svg>
);

const ForwardRef = forwardRef(KucoinLogo);
const Memo = memo(ForwardRef);

export default Memo;