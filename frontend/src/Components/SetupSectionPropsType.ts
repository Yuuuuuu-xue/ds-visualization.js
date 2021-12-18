interface CodeDescription {
  description: string,
  codeBody: string
}

export interface SetupSectionData {
  sectionId: string,
  subtitle: string,
  codeDescription: CodeDescription[]
}
