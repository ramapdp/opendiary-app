import Wrapper from "@/components/global/Wrapper";
import CardDiaries from "@/components/global/(diary)/CardDiaries";

export const revalidate = 0;

export default function Home(): React.ReactElement {
  return (
    <main>
      <Wrapper>
        <CardDiaries />
      </Wrapper>
    </main>
  );
}
