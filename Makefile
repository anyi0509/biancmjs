SHELL := /bin/bash

test:
	@echo "----------------- 我是分界线 -----------------"
	@babel -d lib src
	@nodeunit
	@echo "----------------- 我是分界线 -----------------"

.PHONY: test
