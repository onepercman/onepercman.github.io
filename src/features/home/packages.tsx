import { Loader } from "@/libs/atoms"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FC } from "react"
import { FaNpm } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"

interface PackageData {
  package: {
    name: string
    scope: string
    version: string
    description: string
    keywords: string[]
    date: string
    links: {
      npm: string
      homepage: string
      repository: string
      bugs: string
    }
    author: {
      name: string
    }
    publisher: {
      username: string
      email: string
    }
    maintainers: Array<{
      username: string
      email: string
    }>
  }
  flags: {
    insecure: number
  }
  score: {
    final: number
    detail: {
      quality: number
      popularity: number
      maintenance: number
    }
  }
  searchScore: number
  downloads: number
}

async function getNpmPackages(): Promise<PackageData[]> {
  try {
    const packages = await axios.get("https://registry.npmjs.org/-/v1/search", {
      params: {
        text: `maintainer:onepercman`,
        size: 10,
      },
    })
    const downloadData = await Promise.all(
      packages.data.objects.map((el: any) => {
        return (async function () {
          const stat = await axios.get(
            `https://api.npmjs.org/downloads/point/last-week/${el.package.name}`,
            {
              params: {
                text: `maintainer:onepercman`,
                size: 10,
              },
            },
          )
          return stat.data.downloads
        })()
      }),
    )

    const data = packages.data.objects.map((item: any, index: number) => ({
      ...item,
      downloads: downloadData[index],
    }))

    return data
  } catch (err) {
    return []
  }
}

export const Packages: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get npm packages"],
    async queryFn() {
      return getNpmPackages()
    },
  })

  if (isLoading) return <Loader />

  if (!data?.length) return

  return (
    <section className="bg-component px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="text-2xl font-semibold">My packages</div>
        <div className="grid grid-cols-2 gap-6">
          {data.map((item) => (
            <a
              key={item.package.name}
              href={item.package.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded border-2 border-line p-4 transition-colors hover:border-primary"
            >
              <div className="inline-flex items-center gap-2">
                <FaNpm className="text-3xl text-red-500" />
                <span className="text-lg font-medium transition-colors group-hover:text-primary">
                  {item.package.name}{" "}
                  <span className="text-xs text-secondary">
                    {item.package.version}
                  </span>
                </span>
              </div>
              <div className="line-clamp-3 text-xs text-secondary">
                {item.package.description}
              </div>
              <div className="inline-flex items-center gap-1 text-sm">
                <LuDownload />
                <span>{item.downloads}</span>
                <span className="text-secondary"> - last week</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
