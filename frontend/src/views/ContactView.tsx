import React, { useState } from "react";
import PersonalDisplay from "../components/Personal/PersonalDisplay";
import { getContact } from "../api/ContactAPI";
import { useQuery } from "@tanstack/react-query";
import { contactPersonElement, contactPersonFields } from "../types";

export default function ContactView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ContactPage"],
    queryFn: getContact,
    retry: 10,
  });

  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  if (isLoading || isError) {
    return <div>Loading...</div>;
  }

  const people: contactPersonFields[] = [];

  const elements = data?.fields.sections[0].fields.items;

  elements?.forEach((element: contactPersonElement) => {
    const item: contactPersonFields = {
      name: element.fields.name,
      job: element.fields.job,
      team: element.fields.team,
      // img: "element.fields.img.fields.file.url",
      // facebook: element.fields.facebook,
      // github: element.fields.github,
      // reddit: element.fields.reddit,
    };
    people.push(item);
  });

  function extractTeam(people: contactPersonFields[]) {
    const team = people.map((person) => person.team);
    return Array.from(new Set(team)); 
  }

  const teams = extractTeam(people);

  function extractPeople(people: contactPersonFields[], team: string | null) {
    if (!team) return people;
    return people.filter((person) => person.team === team);
  }

  const peopleTeams = extractPeople(people, selectedTeam);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          our team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
            {teams.map((team, index) => (
              <button
                key={index}
                onClick={() => setSelectedTeam(team)}
                className={`px-4 py-2 text-sm font-medium text-white capitalize ${
                  selectedTeam === team
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-700 hover:bg-gray-800"
                } transition md:py-3 rounded-xl md:px-12`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {peopleTeams.map((person, index) => (
            <PersonalDisplay key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
