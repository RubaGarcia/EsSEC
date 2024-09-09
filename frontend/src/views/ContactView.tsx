import { useState } from "react";
import PersonalDisplay from "../components/Personal/PersonalDisplay";
import { getContact } from "../api/ContactAPI";
import { useQuery } from "@tanstack/react-query";
import { PersonFields, ApiRequest, Cartridge, Entry, Blurb } from "../types";
import { renderRichText } from "../helpers/RichTextProcessor";

export default function ContactView() {
  const { data, isError, isLoading } : {data: undefined | ApiRequest, isError: null | boolean, isLoading: boolean}= useQuery({
    queryKey: ["ContactPage"],
    queryFn: getContact,
    retry: 10,
  });

  // Establecer "All" como el valor predeterminado
  const [selectedTeam, setSelectedTeam] = useState<string>("All");

  if (isLoading || isError) {
    return <div>Loading...</div>;
  }

  const personCartridge: Entry<Cartridge> = data?.fields?.sections?.[0] as Entry<Cartridge>;
  const people : Entry<PersonFields>[]= personCartridge?.fields?.items as Entry<PersonFields>[];

  console.log(JSON.stringify(people));

  function extractTeam(people: Entry<PersonFields>[]) {
    let team = ["All"];
    people.forEach((person) => {
      if (person.fields?.team){
        team.push(person.fields?.team);
      }
    });
    console.log(team);
    return Array.from(new Set(team));
  }

  const teams = extractTeam(people);
  console.log(teams);

  // Mostrar todas las personas cuando el equipo seleccionado es "All"
  function extractPeople(people: Entry<PersonFields>[], team: string) {
    if (team === "All") return people;
    return people.filter((person) => person.fields?.team === team);
  }

  const peopleTeams = extractPeople(people, selectedTeam);

  const blurbContact : Entry<Blurb> = data?.fields?.sections?.[1] as Entry<Blurb>

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          {blurbContact?.fields?.title}
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        {blurbContact.fields?.textBlurb && <div dangerouslySetInnerHTML={{ __html: renderRichText(blurbContact.fields?.textBlurb) }} />}

        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
            {teams.map((team, index) => (
              <button
                key={index}
                onClick={() => setSelectedTeam(team!)}
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
