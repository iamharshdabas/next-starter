CREATE TABLE IF NOT EXISTS "mailVerificationToken" (
	"id" text NOT NULL,
	"token" text NOT NULL,
	"email" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "mailVerificationToken_id_token_pk" PRIMARY KEY("id","token")
);
--> statement-breakpoint
DROP TABLE "verificationToken";