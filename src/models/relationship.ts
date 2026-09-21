export type RelationshipType = 'parent' | 'child' | 'spouse' | 'sibling';

export interface Relationship {
  id: string;
  personId: string;
  relatedPersonId: string;
  type: RelationshipType;
}
