REPOROOT=../
PROTODIRS=$(shell find $(REPOROOT)/arista -name "*.v*" -type d -exec basename {} \;)
DOCTARGETS=$(patsubst %,%.md,$(PROTODIRS))
VERSION_TAG=$(shell git describe --tags --abbrev=0 2>/dev/null || echo "latest")

.PHONY: default
default: docs

.PHONY: docs
docs: $(DOCTARGETS)
	@echo "Documentation Markdown files generated for Docusaurus."

%.md: FULLNAME = $(basename $@)
%.md: NAME = $(basename $(FULLNAME))
%.md: PROTO = $(REPOROOT)/arista/$(FULLNAME)/$(NAME).proto
%.md: SERVICES = $(REPOROOT)/arista/$(FULLNAME)/services.gen.proto
%.md: DEST = content/models/$(FULLNAME).md
%.md:
	@echo "--- generating "$@" from "$(PROTO)"..."
	go run generate_markdown.go -root $(REPOROOT) -in $(PROTO) -out $(DEST)

.PHONY: start
start:
	@echo "Starting Docusaurus with version $(VERSION_TAG)"
	@VERSION_TAG=$(VERSION_TAG) npx docusaurus start

.PHONY: version
version:
	@echo "Creating new Docusaurus version from generated docs with tag $(VERSION_TAG)"
	@VERSION_TAG=$(VERSION_TAG) npx docusaurus docs:version $(VERSION_TAG)
