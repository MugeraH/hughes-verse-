import About from "@/components/About";
import Container from "@/components/Container";
import Intro from "@/components/Intro";
import PostionsHeld from "@/components/PostionsHeld";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Container>
        <Intro />
        <About />
        <Stack />
        <PostionsHeld />
      </Container>
    </div>
  );
}
