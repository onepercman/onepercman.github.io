import { type RouteConfig, index, layout } from "@react-router/dev/routes"

export default [
  layout("shared/layouts/portfolio-layout.tsx", [
    // Portfolio as main index page
    index("routes/portfolio/index.tsx"),
  ]),
] satisfies RouteConfig
