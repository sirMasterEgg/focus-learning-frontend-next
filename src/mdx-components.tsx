import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <>
        <h1
          {...props}
          className="text-gradient"
          style={{
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            margin: "2.5rem auto",
            width: "60%",
          }}
        />
      </>
    ),
    img: (props) => (
      <>
        <Image
          {...(props as ImageProps)}
          width={1300}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: props.alt === "Banner" ? "600px" : "300px",
            maxWidth: "1300px",
            objectFit: "cover",
            margin: "0 auto",
          }}
          alt={props.alt as string}
          title={props.title as string}
        />
        <span
          style={{
            color: "lightgray",
            fontStyle: "italic",
            display: "block",
            textAlign: "center",
          }}
        >
          {props.title}
        </span>
      </>
    ),
    a: (props) => (
      <Link
        {...props}
        style={{
          textDecoration: "underline",
        }}
      />
    ),
    p: (props) => (
      <p
        {...props}
        style={{
          margin: "1rem 0",
        }}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        style={{
          listStyleType: "disc",
          listStylePosition: "outside",
          padding: "0 1rem",
        }}
      >
        {props?.children}
      </ul>
    ),
    ...components,
  };
}
