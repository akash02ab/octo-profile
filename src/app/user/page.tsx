'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Corner from "@/components/Corner";
import RateLimit from "@/components/RateLimit";
import ErrorPage from "@/components/Error";
import Profile from "@/components/Profile";
import Charts from "@/components/Charts";
import Repository from "@/components/Repository";
import Footer from "@/components/Footer";
import Icon from "@/components/Icons";

const GhPolyglot = require("gh-polyglot");

type LimitT = {
  remaining: number,
  limit: number
} | null;

type ErrorT = {
  active: boolean,
  type: number
};

interface Stat {
  label: string;
  value: number;
  color: string;
};

type statsT = Stat[]

export default function User() {
  const API = 'https://api.github.com';
  const searchParams = useSearchParams();
  const username = searchParams.get('id');
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState<LimitT>(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [languages, setLanguages] = useState<Stat[] | null>(null);
  const [error, setError] = useState<ErrorT>({ active: false, type: 200 });

  const getRateLimit = async () => {
    try {
      const url = `${API}/rate_limit`;
      const response = await fetch(url);
      const data = await response.json();
      setRateLimit(data.resources.core);
      if (data.resources.core.remaining < 1) {
        throw new Error("Rate Limit Reached");
      }
    } catch (err) {
      setError({ active: true, type: 403 });
    }
  }

  const getUserData = async () => {
    try {
      const url = `${API}/users/${username}`;
      const response = await fetch(url);
      if (response.status === 404) {
        return setError({ active: true, type: 404 });
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError({ active: true, type: 400 });
    }
  }

  const getRepoData = async () => {
    try {
      const url = `${API}/users/${username}/repos?per_page=100`;
      const response = await fetch(url);
      if (response.status === 404) {
        return setError({ active: true, type: 404 });
      }
      if (response.status === 403) {
        return setError({ active: true, type: 403 });
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError({ active: true, type: 400 });
    }
  }

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err: Error | null, stats: statsT) => {
      if (err) {
        setError({ active: true, type: 400 });
      }
      setLanguages(stats);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await Promise.all([
          getRateLimit(),
          getUserData(),
          getRepoData(),
          getLangData()
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Icon
        name="loading"
        className="w-8 h-8 text-grey animate-spin fill-blue"
      />
    );
  }
  
  return (
    <main className="bg-black min-h-screen">
      {rateLimit && <RateLimit rateLimit={rateLimit} />}
      <Corner />
      {error && error.active ? <ErrorPage error={error} /> : (
        <div className="container mx-auto">
          {user && <Profile user={user} />}
          {languages && repos && <Charts languages={languages} repos={repos}/>}
          {repos && <Repository repos={repos} />}
          <Footer />
        </div>
      )}
    </main>
  )
}