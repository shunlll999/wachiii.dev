import { Fragment } from "react";

type Props = {
  seoTitle: string;
  seoDescription: string;
}

export default function Metadata({ seoTitle, seoDescription }: Props) {
  return (
    <Fragment>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
    </Fragment>
  );
}
