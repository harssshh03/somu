"use client"

import { useEffect, useState } from "react"
import { ActivityCalendar } from "react-activity-calendar"
import Loader from "./icons/loader"

const fetchGitHubContributions = async (username: string) => {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    )
    return await res.json()
  } catch (err) {
    console.error(err)
    return null
  }
}

export default function Github({ username = "soumya-singh18" }) {
  const [data, setData] = useState<any[]>([])
  const [year, setYear] = useState<number>()
  const [years, setYears] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark")

  useEffect(() => {
    fetchGitHubContributions(username).then((res) => {
      if (!res) return

      const availableYears = Object.keys(res.total)
        .map(Number)
        .sort((a, b) => b - a)

      setData(res.contributions)
      setYears(availableYears)
      setYear(availableYears[0])
      setLoading(false)
    })
  }, [username])

  const yearData = data.filter(
    (d) => new Date(d.date).getFullYear() === year
  )

  const total = yearData.reduce((sum, d) => sum + d.count, 0)

  return (
    <div className="max-w-xl mb-8 mx-auto px-5 sm:px-2">
      <div className="rounded-lg p-2">
        {loading ? (
          <div className="h-32 flex items-center  justify-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full overflow-hidden">
  <ActivityCalendar
    data={yearData}
    colorScheme={isDark ? "dark" : "light"}
    showWeekdayLabels={false}
    blockSize={8}
    blockMargin={3}   
    fontSize={12}
    theme={{
      light: [
        "#ebedf0",
        "#9be9a8",
        "#40c463",
        "#30a14e",
        "#216e39",
      ],
      dark: [
        "#161b22",
        "#0e4429",
        "#006d32",
        "#26a641",
        "#39d353",
      ],
    }}
  />
</div>

        )}
      </div>

      {years.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-lg text-center px-4 py-2 border border-transparent
    border-zinc-200 dark:border-zinc-700 text-sm font-medium cursor-pointer
    transition-all duration-300 hover:-translate-y-1 hover:shadow-md
    dark:hover:shadow-white/25
                ${
                  year === y
                   ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
            >
              {y}
            </button>
          ))}
        </div>
      )}
      <div className='mt-9 w-full h-px bg-zinc-300 dark:bg-zinc-600'></div>
    </div>
  )
}
