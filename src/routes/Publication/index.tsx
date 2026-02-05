import { createFileRoute } from "@tanstack/react-router";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemGroup,
} from "@/components/ui/item";

import { Link } from "lucide-react";

import AAAI from "@/assets/AAAI.png";
import NeurIPS from "@/assets/NeurIPS.png";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/Publication/")({
  component: RouteComponent,
});

const PublicationData = [
  {
    title: "Cylindrical Lattice Embedding for Program Induction",
    description:
      "Research Proposal was selected for AAAI-2026 Undergraduate Consortium",
    image: AAAI,
    link: "https://aaai.org/conference/aaai/aaai-26/undergraduate-consortium/",
  },
  {
    title: "Composed Program Induction with Latent Program Lattice",
    description:
      "Jumyung Park, Jiwon Park, Jinseo Shim, Sejin Kim, Paulina Vennemann, Sundong Kim, NeurReps(Symmetry and Geometry in Neural Representations) workshop paper on NeurIPS-2025 ",
    image: NeurIPS,
    link: "https://openreview.net/forum?id=N99odDSTM7",
  },
];

function RouteComponent() {
  return (
    <div className="flex w-full flex-col gap-8 py-4">
      <ItemGroup className="max-w-3xl gap-4">
        {PublicationData.map((pub, index) => (
          <Item variant="outline" size="sm" key={index}>
            <ItemMedia variant="image">
              <img src={pub.image} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{pub.title}</ItemTitle>
              <ItemDescription>{pub.description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="link" size="icon">
                <a href={pub.link}>
                  <Link />
                </a>
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
