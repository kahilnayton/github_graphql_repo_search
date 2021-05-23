import { Fragment } from "react";
import { Modal, H1, H2, Text, CloseButton } from "../styles/index";
import GTLogo from "../github.png";


export function RepoModal({ selectedRepo, clearSelection }: any) {
  console.log(selectedRepo);

  let languages = selectedRepo.languages;
  languages = languages?.nodes.length > 0 ? languages.nodes : null;

  return (
    <Modal>
      <H1>{selectedRepo.name}</H1>
      <H2>{selectedRepo.description}</H2>
      <Text>
        Languages:{" "}
        {languages &&
          languages.map((lang: any, i: number) => (
            <Fragment key={i}>{lang.name}, </Fragment>
          ))}
      </Text>
      <Text>Pull requests: {selectedRepo.pullRequests.totalCount}</Text>

      <Text>Stars: {selectedRepo.stargazers?.totalCount} ⭐</Text>
      <Text>Issues: {selectedRepo.issues?.totalCount} 🤞</Text>
      <Text>Forks: {selectedRepo.forkCount} 🍴</Text>


      <a target="_blank" href={selectedRepo.url}>
        Visit:
        <img src={GTLogo} alt="Git hub logo" />
      </a>

      <CloseButton onClick={clearSelection}>
        close
      </CloseButton>
    </Modal>
  );
}
