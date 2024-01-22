import Lottie from "lottie-react";
import loginAnimation from "./../../../public/login.json";
import helloAnimation from "./../../../public/hello.json";
import bannerAnimation from "./../../../public/banner.json";

export const Hi = () => <Lottie animationData={loginAnimation} loop={true} />;
export const Hello = () => (
  <Lottie animationData={helloAnimation} loop={true} />
);
export const BannerA = () => (
  <Lottie animationData={bannerAnimation} width={300} loop={true} />
);
