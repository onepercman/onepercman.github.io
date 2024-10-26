import { GITHUB_TOKEN } from "@/config/endpoints.config"
import { Loader } from "@/libs/atoms"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"
import { LuGitFork, LuGithub, LuStar } from "react-icons/lu"
import { cn } from "react-tvcx"

interface RepoInfo {
  name: string
  url: string
  description: string
  stargazerCount: number
  forkCount: number
  languages: {
    nodes: Array<{ name: string }>
  }
}

async function getPinnedRepos(username: string): Promise<RepoInfo[]> {
  const query = `
    query getPinnedRepos($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              forkCount
              url
              languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `

  const variables = { username }

  try {
    const response = await axios.post(
      "https://api.github.com/graphql",
      { query, variables },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      },
    )

    return response.data.data.user.pinnedItems.nodes
  } catch (error) {
    return []
  }
}

export const RepoList: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get pinned repositories"],
    async queryFn() {
      return getPinnedRepos("onepercman")
    },
  })

  if (isLoading) return <Loader />

  if (!data) return

  return (
    <section className="bg-component px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="text-2xl font-semibold">Featured repos</div>
        <div className="grid grid-cols-2 gap-6">
          {data.map((repo) => (
            <div
              key={repo.url}
              className="flex flex-col gap-2 rounded border-2 border-line p-4"
            >
              <div className="inline-flex items-center gap-4">
                <LuGithub />
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {repo.name}
                </a>
              </div>
              <div className="inline-flex items-center gap-2 text-sm">
                <div
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border border-line px-3 py-1",
                    { "border-primary text-primary": repo.stargazerCount > 0 },
                  )}
                >
                  <LuStar />
                  <span>{repo.stargazerCount}</span>
                </div>
                <div
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border border-line px-3 py-1",
                    { "border-primary text-primary": repo.forkCount > 0 },
                  )}
                >
                  <LuGitFork />
                  <span>{repo.forkCount}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2">
                {repo.languages.nodes.map((node) => {
                  let name = node.name.toLowerCase()
                  if (name === "html") name += "5"
                  return (
                    <img
                      key={name}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
