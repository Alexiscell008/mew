CREATE TABLE "Salesforce.Content Document (ContentDocument)" (
  "ContentDocument ID (Id)" id(18),
  "Created By ID (CreatedById)" reference(18),
  "Last Modified By ID (LastModifiedById)" reference(18),
  "User ID (ArchivedById)" reference(18),
  "Owner ID (OwnerId)" reference(18),
  "Latest Published Version ID (LatestPublishedVersionId)" reference(18),
  "Parent ID (ParentId)" reference(18),
  PRIMARY KEY ("ContentDocument ID (Id)")
);

CREATE TABLE "Salesforce.Content Folder (ContentFolder)" (
  "Content Folder ID (Id)" id(18),
  "Created By ID (CreatedById)" reference(18),
  "Last Modified By ID (LastModifiedById)" reference(18),
  "Parent Content Folder ID (ParentContentFolderId)" reference(18),
  PRIMARY KEY ("Content Folder ID (Id)"),
  CONSTRAINT "FK_Salesforce.Content Folder (ContentFolder).Parent Content Folder ID (ParentContentFolderId)"
    FOREIGN KEY ("Parent Content Folder ID (ParentContentFolderId)")
      REFERENCES "Salesforce.Content Folder (ContentFolder)"("Content Folder ID (Id)")
);

CREATE TABLE "Salesforce.Content Folder Member (ContentFolderMember)" (
  "Content Folder Member ID (Id)" id(18),
  "Parent Content Folder ID (ParentContentFolderId)" reference(18),
  "Child Record ID (ChildRecordId)" reference(18),
  "Created By ID (CreatedById)" reference(18),
  "Last Modified By ID (LastModifiedById)" reference(18),
  PRIMARY KEY ("Content Folder Member ID (Id)"),
  CONSTRAINT "FK_Salesforce.Content Folder Member (ContentFolderMember).Child Record ID (ChildRecordId)"
    FOREIGN KEY ("Child Record ID (ChildRecordId)")
      REFERENCES "Salesforce.Content Document (ContentDocument)"("ContentDocument ID (Id)"),
  CONSTRAINT "FK_Salesforce.Content Folder Member (ContentFolderMember).Parent Content Folder ID (ParentContentFolderId)"
    FOREIGN KEY ("Parent Content Folder ID (ParentContentFolderId)")
      REFERENCES "Salesforce.Content Folder (ContentFolder)"("Content Folder ID (Id)")
);

CREATE TABLE "Salesforce.Content Folder Item (ContentFolderItem)" (
  "Content Folder Item ID (Id)" id(18),
  "Parent Content Folder ID (ParentContentFolderId)" reference(18),
  "Created By ID (CreatedById)" reference(18),
  "Last Modified By ID (LastModifiedById)" reference(18),
  PRIMARY KEY ("Content Folder Item ID (Id)"),
  CONSTRAINT "FK_Salesforce.Content Folder Item (ContentFolderItem).Parent Content Folder ID (ParentContentFolderId)"
    FOREIGN KEY ("Parent Content Folder ID (ParentContentFolderId)")
      REFERENCES "Salesforce.Content Folder (ContentFolder)"("Content Folder ID (Id)")
);

CREATE TABLE "Salesforce.Content Folder Link (ContentFolderLink)" (
  "Content Folder Link ID (Id)" id(18),
  "Parent Entity ID (ParentEntityId)" reference(18),
  "Content Folder ID (ContentFolderId)" reference(18),
  PRIMARY KEY ("Content Folder Link ID (Id)"),
  CONSTRAINT "FK_Salesforce.Content Folder Link (ContentFolderLink).Content Folder ID (ContentFolderId)"
    FOREIGN KEY ("Content Folder ID (ContentFolderId)")
      REFERENCES "Salesforce.Content Folder (ContentFolder)"("Content Folder ID (Id)")
);

