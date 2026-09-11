# Changelog

**Please see https://github.com/microsoft/vscode-python/releases for the latest release notes. The notes below have been kept for historical purposes.**

## 2022.10.1 (14 July 2022)

### Code Health

-   Update app insights key by [karthiknadig](https://github.com/karthiknadig) in ([#19463](https://github.com/microsoft/vscode-python/pull/19463)).

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.10.0 (7 July 2022)

### Enhancements

-   Add `breakpoint` support for `django-html` & `django-txt` by [Lakshmikanth2001](https://github.com/Lakshmikanth2001) in ([#19288](https://github.com/microsoft/vscode-python/pull/19288)).
-   Fix `unittest` discovery issue with experimental component by [ksy7588](https://github.com/ksy7588) in ([#19324](https://github.com/microsoft/vscode-python/pull/19324)).
-   Trigger refresh when using `Select Interpreter` command if no envs were found previously by [karrtikr](https://github.com/karrtikr) in ([#19361](https://github.com/microsoft/vscode-python/pull/19361)).
-   Update `debugpy` to 1.6.2.

### Bug Fixes

-   Fix variable name for `flake8Path`'s description by [usta](https://github.com/usta) in ([#19313](https://github.com/microsoft/vscode-python/pull/19313)).
-   Ensure we dispose objects on deactivate by [karthiknadig](https://github.com/karthiknadig) in ([#19341](https://github.com/microsoft/vscode-python/pull/19341)).
-   Ensure we can change interpreters after trusting a workspace by [karrtikr](https://github.com/karrtikr) in ([#19353](https://github.com/microsoft/vscode-python/pull/19353)).
-   Fix for `::::` in node id for `pytest` by [karthiknadig](https://github.com/karthiknadig) in ([#19356](https://github.com/microsoft/vscode-python/pull/19356)).
-   Ensure we register for interpreter change when moving from untrusted to trusted. by [karthiknadig](https://github.com/karthiknadig) in ([#19351](https://github.com/microsoft/vscode-python/pull/19351)).

### Code Health

-   Update CI for using GitHub Actions for release notes by [brettcannon](https://github.com/brettcannon) in ([#19273](https://github.com/microsoft/vscode-python/pull/19273)).
-   Add missing translations by [paulacamargo25](https://github.com/paulacamargo25) in ([#19305](https://github.com/microsoft/vscode-python/pull/19305)).
-   Delete the `news` directory by [brettcannon](https://github.com/brettcannon) in ([#19308](https://github.com/microsoft/vscode-python/pull/19308)).
-   Fix interpreter discovery related telemetry by [karrtikr](https://github.com/karrtikr) in ([#19319](https://github.com/microsoft/vscode-python/pull/19319)).
-   Simplify and merge async dispose and dispose by [karthiknadig](https://github.com/karthiknadig) in ([#19348](https://github.com/microsoft/vscode-python/pull/19348)).
-   Updating required packages by [karthiknadig](https://github.com/karthiknadig) in ([#19375](https://github.com/microsoft/vscode-python/pull/19375)).
-   Update the issue notebook by [brettcannon](https://github.com/brettcannon) in ([#19388](https://github.com/microsoft/vscode-python/pull/19388)).
-   Remove `notebookeditor` proposed API by [karthiknadig](https://github.com/karthiknadig) in ([#19392](https://github.com/microsoft/vscode-python/pull/19392)).

**Full Changelog**: https://github.com/microsoft/vscode-python/compare/2022.8.1...2022.10.0

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.8.1 (28 June 2022)

### Code Health

1. Update vscode `extension-telemetry` package.
   ([#19375](https://github.com/microsoft/vscode-python/pull/19375))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.8.0 (9 June 2022)

### Enhancements

1. Make cursor focus switch automatically to the terminal after launching a python process with configuration option. (Thanks [djplt](https://github.com/djplt))
   ([#14851](https://github.com/Microsoft/vscode-python/issues/14851))
1. Enable localization using vscode-nls.
   ([#18286](https://github.com/Microsoft/vscode-python/issues/18286))
1. Add support for referencing multiroot-workspace folders in settings using `${workspaceFolder:<folder_name>}`.
   ([#18650](https://github.com/Microsoft/vscode-python/issues/18650))
1. Ensure conda envs lacking an interpreter which do not use a valid python binary are also discovered and is selectable, so that `conda env list` matches with what the extension reports.
   ([#18934](https://github.com/Microsoft/vscode-python/issues/18934))
1. Improve information collected by the `Python: Report Issue` command.
   ([#19067](https://github.com/Microsoft/vscode-python/issues/19067))
1. Only trigger auto environment discovery if a user attempts to choose a different interpreter, or when a particular scope (a workspace folder or globally) is opened for the first time.
   ([#19102](https://github.com/Microsoft/vscode-python/issues/19102))
1. Added a proposed API to report progress of environment discovery in two phases.
   ([#19103](https://github.com/Microsoft/vscode-python/issues/19103))
1. Update to latest LS client (v8.0.0) and server (v8.0.0).
   ([#19114](https://github.com/Microsoft/vscode-python/issues/19114))
1. Update to latest LS client (v8.0.1) and server (v8.0.1) that contain the race condition fix around `LangClient.stop`.
   ([#19139](https://github.com/Microsoft/vscode-python/issues/19139))

### Fixes

1. Do not use `--user` flag when installing in a virtual environment.
   ([#14327](https://github.com/Microsoft/vscode-python/issues/14327))
1. Fix error `No such file or directory` on conda activate, and simplify the environment activation code.
   ([#18989](https://github.com/Microsoft/vscode-python/issues/18989))
1. Add proposed async execution API under environments.
   ([#19079](https://github.com/Microsoft/vscode-python/issues/19079))

### Code Health

1. Capture whether environment discovery was triggered using Quickpick UI.
   ([#19077](https://github.com/Microsoft/vscode-python/issues/19077))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.6.0 (5 May 2022)

### Enhancements

1. Rewrite support for unittest test discovery.
   ([#17242](https://github.com/Microsoft/vscode-python/issues/17242))
1. Do not require a reload when swapping between language servers.
   ([#18509](https://github.com/Microsoft/vscode-python/issues/18509))

### Fixes

1. Do not show inherit env prompt for conda envs when running "remotely".
   ([#18510](https://github.com/Microsoft/vscode-python/issues/18510))
1. Fixes invalid regular expression logging error occurs when file paths contain special characters.
   (Thanks [sunyinqi0508](https://github.com/sunyinqi0508))
   ([#18829](https://github.com/Microsoft/vscode-python/issues/18829))
1. Do not prompt to select new virtual envrionment if it has already been selected.
   ([#18915](https://github.com/Microsoft/vscode-python/issues/18915))
1. Disable isort when using isort extension.
   ([#18945](https://github.com/Microsoft/vscode-python/issues/18945))
1. Remove `process` check from browser specific entry point for the extension.
   ([#18974](https://github.com/Microsoft/vscode-python/issues/18974))
1. Use built-in test refresh button.
   ([#19012](https://github.com/Microsoft/vscode-python/issues/19012))
1. Update vscode-telemetry-extractor to @vscode/telemetry-extractor@1.9.7.
   (Thanks [Quan Zhuo](https://github.com/quanzhuo))
   ([#19036](https://github.com/Microsoft/vscode-python/issues/19036))
1. Ensure 64-bit interpreters are preferred over 32-bit when auto-selecting.
   ([#19042](https://github.com/Microsoft/vscode-python/issues/19042))

### Code Health

1. Update Jedi minimum to python 3.7.
   ([#18324](https://github.com/Microsoft/vscode-python/issues/18324))
1. Stop using `--live-stream` when using `conda run` (see https://github.com/conda/conda/issues/11209 for details).
   ([#18511](https://github.com/Microsoft/vscode-python/issues/18511))
1. Remove prompt to recommend users in old insiders program to switch to pre-release.
   ([#18809](https://github.com/Microsoft/vscode-python/issues/18809))
1. Update requirements to remove python 2.7 version restrictions.
   ([#19060](https://github.com/Microsoft/vscode-python/issues/19060))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.4.1 (7 April 2022)

### Fixes

1. Ensure `conda info` command isn't run multiple times during startup when large number of conda interpreters are present.
   ([#18200](https://github.com/Microsoft/vscode-python/issues/18200))
1. If a conda environment is not returned via the `conda env list` command, consider it as unknown env type.
   ([#18530](https://github.com/Microsoft/vscode-python/issues/18530))
1. Wrap file paths containing an ampersand in double quotation marks for running commands in a shell.
   ([#18722](https://github.com/Microsoft/vscode-python/issues/18722))
1. Fixes regression with support for python binaries not following the standard names.
   ([#18835](https://github.com/Microsoft/vscode-python/issues/18835))
1. Fix launch of Python Debugger when using conda environments.
   ([#18847](https://github.com/Microsoft/vscode-python/issues/18847))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.4.0 (30 March 2022)

### Enhancements

1. Use new pre-release mechanism to install insiders.
   ([#18144](https://github.com/Microsoft/vscode-python/issues/18144))
1. Add support for detection and selection of conda environments lacking a python interpreter.
   ([#18357](https://github.com/Microsoft/vscode-python/issues/18357))
1. Retains the state of the TensorBoard webview.
   ([#18591](https://github.com/Microsoft/vscode-python/issues/18591))
1. Move interpreter info status bar item to the right.
   ([#18710](https://github.com/Microsoft/vscode-python/issues/18710))
1. `debugpy` updated to version `v1.6.0`.
   ([#18795](https://github.com/Microsoft/vscode-python/issues/18795))

### Fixes

1. Properly dismiss the error popup dialog when having a linter error. (Thanks [Virgil Sisoe](https://github.com/sisoe24))
   ([#18553](https://github.com/Microsoft/vscode-python/issues/18553))
1. Python files are no longer excluded from Pytest arguments during test discovery.
   (thanks [Marc Mueller](https://github.com/cdce8p/))
   ([#18562](https://github.com/Microsoft/vscode-python/issues/18562))
1. Fixes regression caused due to using `conda run` for executing files.
   ([#18634](https://github.com/Microsoft/vscode-python/issues/18634))
1. Use `conda run` to get the activated environment variables instead of activation using shell scripts.
   ([#18698](https://github.com/Microsoft/vscode-python/issues/18698))

### Code Health

1. Remove old settings migrator.
   ([#14334](https://github.com/Microsoft/vscode-python/issues/14334))
1. Remove old language server setting migration.
   ([#14337](https://github.com/Microsoft/vscode-python/issues/14337))
1. Remove dependency on other file system watchers.
   ([#18381](https://github.com/Microsoft/vscode-python/issues/18381))
1. Update TypeScript version to 4.5.5.
   ([#18602](https://github.com/Microsoft/vscode-python/issues/18602))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.2.0 (3 March 2022)

### Enhancements

1. Implement a "New Python File" command
   ([#18376](https://github.com/Microsoft/vscode-python/issues/18376))
1. Use `conda run` for conda environments for running python files and installing modules.
   ([#18479](https://github.com/Microsoft/vscode-python/issues/18479))
1. Better filename patterns for pip-requirements.
   (thanks [Baptiste Darthenay](https://github.com/batisteo))
   ([#18498](https://github.com/Microsoft/vscode-python/issues/18498))

### Fixes

1. Ensure clicking "Discovering Python Interpreters" in the status bar shows the current discovery progress.
   ([#18443](https://github.com/Microsoft/vscode-python/issues/18443))
1. Fixes Pylama output parsing with MyPy. (thanks [Nicola Marella](https://github.com/nicolamarella))
   ([#15609](https://github.com/Microsoft/vscode-python/issues/15609))
1. Fix CPU load issue caused by poetry plugin by not watching directories which do not exist.
   ([#18459](https://github.com/Microsoft/vscode-python/issues/18459))
1. Explicitly add `"justMyCode": "true"` to all `launch.json` configurations.
   (Thanks [Matt Bogosian](https://github.com/posita))
   ([#18471](https://github.com/Microsoft/vscode-python/issues/18471))
1. Identify base conda environments inside pyenv correctly.
   ([#18500](https://github.com/Microsoft/vscode-python/issues/18500))
1. Fix for a crash when loading environments with no info.
   ([#18594](https://github.com/Microsoft/vscode-python/issues/18594))

### Code Health

1. Remove dependency on `ts-mock-imports`.
   ([#14757](https://github.com/Microsoft/vscode-python/issues/14757))
1. Update `vsce` to `v2.6.6`.
   ([#18411](https://github.com/Microsoft/vscode-python/issues/18411))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.0.1 (8 February 2022)

### Fixes

1. Fix `invalid patch string` error when using conda.
   ([#18455](https://github.com/Microsoft/vscode-python/issues/18455))
1. Revert to old way of running debugger if conda version less than 4.9.0.
   ([#18436](https://github.com/Microsoft/vscode-python/issues/18436))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2022.0.0 (3 February 2022)

### Enhancements

1. Add support for conda run without output, using `--no-capture-output` flag.
   ([#7696](https://github.com/Microsoft/vscode-python/issues/7696))
1. Add an option to clear interpreter setting for all workspace folders in multiroot scenario.
   ([#17693](https://github.com/Microsoft/vscode-python/issues/17693))
1. Public API for environments (proposed).
   ([#17905](https://github.com/Microsoft/vscode-python/issues/17905))
1. Group interpreters in interpreter quick picker using separators.
   ([#17944](https://github.com/Microsoft/vscode-python/issues/17944))
1. Add support for pylint error ranges. Requires Python 3.8 and pylint 2.12.2 or higher. (thanks [Marc Mueller](https://github.com/cdce8p))
   ([#18068](https://github.com/Microsoft/vscode-python/issues/18068))
1. Move pinned interpreter status bar item towards the right behind `pythonInterpreterInfoPinned` experiment.
   ([#18282](https://github.com/Microsoft/vscode-python/issues/18282))
1. Move interpreter status bar item into the `Python` language status item behind `pythonInterpreterInfoUnpinned` experiment.
   ([#18283](https://github.com/Microsoft/vscode-python/issues/18283))
1. Update Jedi language server to latest.
   ([#18325](https://github.com/Microsoft/vscode-python/issues/18325))

### Fixes

1. Update zh-tw translations. (thanks [ted1030](https://github.com/ted1030))
   ([#17991](https://github.com/Microsoft/vscode-python/issues/17991))
1. Support selecting conda environments with python `3.10`.
   ([#18128](https://github.com/Microsoft/vscode-python/issues/18128))
1. Fixes to telemetry handler in language server middleware.
   ([#18188](https://github.com/Microsoft/vscode-python/issues/18188))
1. Resolve system variables in `python.defaultInterpreterPath`.
   ([#18207](https://github.com/Microsoft/vscode-python/issues/18207))
1. Ensures interpreters are discovered even when running `interpreterInfo.py` script prints more than just the script output.
   ([#18234](https://github.com/Microsoft/vscode-python/issues/18234))
1. Remove restrictions on using `purpose` in debug configuration.
   ([#18248](https://github.com/Microsoft/vscode-python/issues/18248))
1. Ensure Python Interpreter information in the status bar is updated if Interpreter information changes.
   ([#18257](https://github.com/Microsoft/vscode-python/issues/18257))
1. Fix "Run Selection/Line in Python Terminal" for Python < 3.8 when the code includes decorators.
   ([#18258](https://github.com/Microsoft/vscode-python/issues/18258))
1. Ignore notebook cells for pylance. Jupyter extension is handling notebooks.
   ([#18259](https://github.com/Microsoft/vscode-python/issues/18259))
1. Fix for UriError when using python.interpreterPath command in tasks.
   ([#18285](https://github.com/Microsoft/vscode-python/issues/18285))
1. Ensure linting works under `conda run` (work-around for https://github.com/conda/conda/issues/10972).
   ([#18364](https://github.com/Microsoft/vscode-python/issues/18364))
1. Ensure items are removed from the array in reverse order when using array indices.
   ([#18382](https://github.com/Microsoft/vscode-python/issues/18382))
1. Log experiments only after we finish updating active experiments list.
   ([#18393](https://github.com/Microsoft/vscode-python/issues/18393))

### Code Health

1. Improve unit tests for envVarsService, in particular the variable substitution logic (Thanks [Keshav Kini](https://github.com/kini))
   ([#17747](https://github.com/Microsoft/vscode-python/issues/17747))
1. Remove `python.pythonPath` setting and `pythonDeprecatePythonPath` experiment.
   ([#17977](https://github.com/Microsoft/vscode-python/issues/17977))
1. Remove `pythonTensorboardExperiment` and `PythonPyTorchProfiler` experiments.
   ([#18074](https://github.com/Microsoft/vscode-python/issues/18074))
1. Reduce direct dependency on IOutputChannel.
   ([#18132](https://github.com/Microsoft/vscode-python/issues/18132))
1. Upgrade to Node 14 LTS (v14.18.2).
   ([#18148](https://github.com/Microsoft/vscode-python/issues/18148))
1. Switch `jedils_requirements.txt` to `requirements.txt` under `pythonFiles/jedilsp_requirements/`.
   ([#18185](https://github.com/Microsoft/vscode-python/issues/18185))
1. Removed `experiments.json` file.
   ([#18235](https://github.com/Microsoft/vscode-python/issues/18235))
1. Fixed typescript and namespace errors. (Thanks [Harry-Hopkinson](https://github.com/Harry-Hopkinson))
   ([#18345](https://github.com/Microsoft/vscode-python/issues/18345))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Pylance](https://github.com/microsoft/pylance-release)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.12.0 (9 December 2021)

### Enhancements

1. Python extension should activate on onDebugInitialConfigurations.
   (thanks [Nayana Vinod](https://github.com/nayana-vinod) and [Jessica Jolly](https://github.com/JessieJolly)).
   ([#9557](https://github.com/Microsoft/vscode-python/issues/9557))
1. Declare limited support when running in virtual workspaces by only supporting language servers.
   ([#17519](https://github.com/Microsoft/vscode-python/issues/17519))
1. Add a "Do not show again" option to the formatter installation prompt.
   ([#17937](https://github.com/Microsoft/vscode-python/issues/17937))
1. Add the ability to install `pip` if missing, when installing missing packages from the `Jupyter Extension`.
   ([#17975](https://github.com/Microsoft/vscode-python/issues/17975))
1. Declare limited support for untrusted workspaces by only supporting Pylance.
   ([#18031](https://github.com/Microsoft/vscode-python/issues/18031))
1. Update to latest jedi language server.
   ([#18051](https://github.com/Microsoft/vscode-python/issues/18051))
1. Add language status item indicating that extension works partially in virtual and untrusted workspaces.
   ([#18059](https://github.com/Microsoft/vscode-python/issues/18059))

### Fixes

1. Partial fix for using the same directory as discovery when running tests.
   (thanks [Brian Rutledge](https://github.com/bhrutledge))
   ([#9553](https://github.com/Microsoft/vscode-python/issues/9553))
1. Handle decorators properly when using the `Run Selection/Line in Python Terminal` command.
   ([#15058](https://github.com/Microsoft/vscode-python/issues/15058))
1. Don't interpret `--rootdir` as a test folder for `pytest`.
   (thanks [Brian Rutledge](https://github.com/bhrutledge))
   ([#16079](https://github.com/Microsoft/vscode-python/issues/16079))
1. Ensure debug configuration env variables overwrite env variables defined in .env file.
   ([#16984](https://github.com/Microsoft/vscode-python/issues/16984))
1. Fix for `pytest` run all tests when using `pytest.ini` and `cwd`.
   (thanks [Brian Rutledge](https://github.com/bhrutledge))
   ([#17546](https://github.com/Microsoft/vscode-python/issues/17546))
1. When parsing pytest node ids with parameters, use native pytest information to separate out the parameter decoration rather than try and parse the nodeid as text.
   (thanks [Martijn Pieters](https://github.com/mjpieters))
   ([#17676](https://github.com/Microsoft/vscode-python/issues/17676))
1. Do not process system Python 2 installs on macOS Monterey.
   ([#17870](https://github.com/Microsoft/vscode-python/issues/17870))
1. Remove duplicate "Clear Workspace Interpreter Setting" command from the command palette.
   ([#17890](https://github.com/Microsoft/vscode-python/issues/17890))
1. Ensure that path towards extenal tools like linters are not synched between
   machines. (thanks [Sorin Sbarnea](https://github.com/ssbarnea))
   ([#18008](https://github.com/Microsoft/vscode-python/issues/18008))
1. Increase timeout for activation of conda environments from 30s to 60s.
   ([#18017](https://github.com/Microsoft/vscode-python/issues/18017))

### Code Health

1. Removing experiments for refresh and failed tests buttons.
   ([#17868](https://github.com/Microsoft/vscode-python/issues/17868))
1. Remove caching debug configuration experiment only.
   ([#17895](https://github.com/Microsoft/vscode-python/issues/17895))
1. Remove "join mailing list" notification experiment.
   ([#17904](https://github.com/Microsoft/vscode-python/issues/17904))
1. Remove dependency on `winston` logger.
   ([#17921](https://github.com/Microsoft/vscode-python/issues/17921))
1. Bump isort from 5.9.3 to 5.10.0.
   ([#17923](https://github.com/Microsoft/vscode-python/issues/17923))
1. Remove old discovery code and discovery experiments.
   ([#17962](https://github.com/Microsoft/vscode-python/issues/17962))
1. Remove dependency on `azure-storage`.
   ([#17972](https://github.com/Microsoft/vscode-python/issues/17972))
1. Ensure telemetry correctly identifies when users set linter paths.
   ([#18019](https://github.com/Microsoft/vscode-python/issues/18019))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.11.0 (4 November 2021)

### Enhancements

1. Improve setting description for enabling A/B tests. (Thanks [Thi Le](https://github.com/thi-lee))
   ([#7793](https://github.com/Microsoft/vscode-python/issues/7793))
1. Support `expectedFailure` when running `unittest` tests using `pytest`.
   ([#8427](https://github.com/Microsoft/vscode-python/issues/8427))
1. Support environment variable substitution in `python` property for `launch.json`.
   ([#12289](https://github.com/Microsoft/vscode-python/issues/12289))
1. Update homebrew instructions to install python 3.
   (thanks [Carolinekung2 ](https://github.com/Carolinekung2))
   ([#17590](https://github.com/Microsoft/vscode-python/issues/17590))

### Fixes

1. Reworded message for A/B testing in the output channel to "Experiment 'X' is active/inactive".
   (Thanks [Vidushi Gupta](https://github.com/Vidushi-Gupta) for the contribution)
   ([#6352](https://github.com/Microsoft/vscode-python/issues/6352))
1. Change text to "Select at workspace level" instead of "Entire workspace" when selecting or clearing interpreters in a multiroot folder scenario.
   (Thanks [Quynh Do](https://github.com/quynhd07))
   ([#10737](https://github.com/Microsoft/vscode-python/issues/10737))
1. Fix unresponsive extension issues caused by discovery component.
   ([#11924](https://github.com/Microsoft/vscode-python/issues/11924))
1. Remove duplicate 'Run Python file' commands in command palette.
   ([#14562](https://github.com/Microsoft/vscode-python/issues/14562))
1. Change drive first before changing directory in windows, to anticipate running file outside working directory with different storage drive. (thanks [afikrim](https://github.com/afikrim))
   ([#14730](https://github.com/Microsoft/vscode-python/issues/14730))
1. Support installing Insiders extension in remote sessions.
   ([#15145](https://github.com/Microsoft/vscode-python/issues/15145))
1. If the executeInFileDir setting is enabled, always change to the script directory before running the script, even if the script is in the Workspace folder. (thanks (acash715)[https://github.com/acash715])
   ([#15181](https://github.com/Microsoft/vscode-python/issues/15181))
1. replaceAll for replacing separators. (thanks [Aliva Das](https://github.com/IceJinx33))
   ([#15288](https://github.com/Microsoft/vscode-python/issues/15288))
1. When activating environment, creating new Integrated Terminal doesn't take selected workspace into account. (Thanks [Vidushi Gupta](https://github.com/Vidushi-Gupta) for the contribution)
   ([#15522](https://github.com/Microsoft/vscode-python/issues/15522))
1. Fix truncated mypy errors by setting `--no-pretty`.
   (thanks [Peter Lithammer](https://github.com/lithammer))
   ([#16836](https://github.com/Microsoft/vscode-python/issues/16836))
1. Renamed the commands in the Run/Debug button of the editor title. (thanks (Analía Bannura)[https://github.com/analiabs] and (Anna Arsentieva)[https://github.com/arsentieva])
   ([#17019](https://github.com/Microsoft/vscode-python/issues/17019))
1. Fix for `pytest` run all tests when using `pytest.ini`.
   ([#17546](https://github.com/Microsoft/vscode-python/issues/17546))
1. Ensures test node is updated when `unittest` sub-tests are used.
   ([#17561](https://github.com/Microsoft/vscode-python/issues/17561))
1. Update debugpy to 1.5.1 to ensure user-unhandled exception setting is false by default.
   ([#17789](https://github.com/Microsoft/vscode-python/issues/17789))
1. Ensure we filter out unsupported features in web scenario using `shellExecutionSupported` context key.
   ([#17811](https://github.com/Microsoft/vscode-python/issues/17811))
1. Remove `python.condaPath` from workspace scope.
   ([#17819](https://github.com/Microsoft/vscode-python/issues/17819))
1. Make updateTestItemFromRawData async to prevent blocking the extension.
   ([#17823](https://github.com/Microsoft/vscode-python/issues/17823))
1. Semantic colorization can sometimes require reopening or scrolling of a file.
   ([#17878](https://github.com/Microsoft/vscode-python/issues/17878))

### Code Health

1. Remove TSLint comments since we use ESLint.
   ([#4060](https://github.com/Microsoft/vscode-python/issues/4060))
1. Remove unused SHA512 hashing code.
   ([#7333](https://github.com/Microsoft/vscode-python/issues/7333))
1. Remove unused packages.
   ([#16840](https://github.com/Microsoft/vscode-python/issues/16840))
1. Remove old discovery code and discovery experiments.
   ([#17795](https://github.com/Microsoft/vscode-python/issues/17795))
1. Do not query for version and kind if it's not needed when reporting an issue.
   ([#17815](https://github.com/Microsoft/vscode-python/issues/17815))
1. Remove Microsoft Python Language Server support from the extension.
   ([#17834](https://github.com/Microsoft/vscode-python/issues/17834))
1. Bump `packaging` from 21.0 to 21.2.
   ([#17886](https://github.com/Microsoft/vscode-python/issues/17886))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.10.1 (13 October 2021)

### Enhancements

1. Provide IntelliSense status information when using `github.dev` or any other web platform.
   ([#17658](https://github.com/Microsoft/vscode-python/issues/17658))

### Fixes

1. Ensure commands run are not logged twice in Python output channel.
   ([#7160](https://github.com/Microsoft/vscode-python/issues/7160))
1. Ensure we use fragment when formatting notebook cells.
   ([#16980](https://github.com/Microsoft/vscode-python/issues/16980))
1. Hide UI elements that are not applicable when using `github.dev` or any other web platform.
   ([#17252](https://github.com/Microsoft/vscode-python/issues/17252))
1. Localize strings on `github.dev` using VSCode FS API.
   ([#17712](https://github.com/Microsoft/vscode-python/issues/17712))

### Code Health

1. Log commands run by the discovery component in the output channel.
   ([#16732](https://github.com/Microsoft/vscode-python/issues/16732))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.10.0 (7 October 2021)

### Enhancements

1. Set the default value of `python.linting.pylintEnabled` to `false`.
   ([#3007](https://github.com/Microsoft/vscode-python/issues/3007))
1. Phase out Jedi 0.17, and use Jedi behind a language server protocol as the Jedi option. Remove Jedi-related settings `python.jediMemoryLimit` and `python.jediPath`, since they are not used with the new language server implementation.
   ([#11995](https://github.com/Microsoft/vscode-python/issues/11995))
1. Add support for dynamic updates in interpreter list.
   ([#17043](https://github.com/Microsoft/vscode-python/issues/17043))
1. Query for fresh workspace envs when auto-selecting interpreters in a new workspace.
   ([#17264](https://github.com/Microsoft/vscode-python/issues/17264))
1. Increase Microsoft Python Language Server deprecation prompt frequency and update wording.
   ([#17361](https://github.com/Microsoft/vscode-python/issues/17361))
1. Remove "The Python extension will have limited support for Python 2.7 in the next release" notification.
   ([#17451](https://github.com/Microsoft/vscode-python/issues/17451))
1. Added non-blocking discovery APIs for Jupyter.
   ([#17452](https://github.com/Microsoft/vscode-python/issues/17452))
1. Resolve environments using cache if cache has complete env info.
   ([#17474](https://github.com/Microsoft/vscode-python/issues/17474))
1. Ensure debugger contribution points are turned off when using virtual workspaces.
   ([#17493](https://github.com/Microsoft/vscode-python/issues/17493))
1. Display a notification about the end of Jedi support when using Python 2.7.
   ([#17512](https://github.com/Microsoft/vscode-python/issues/17512))
1. If user has selected an interpreter which is not discovery cache, correctly add it to cache.
   ([#17575](https://github.com/Microsoft/vscode-python/issues/17575))
1. Update to latest version of Jedi LS.
   ([#17591](https://github.com/Microsoft/vscode-python/issues/17591))
1. Update to `vscode-extension-telemetry` 0.4.2.
   ([#17608](https://github.com/Microsoft/vscode-python/issues/17608))

### Fixes

1. Don't override user provided `--rootdir` in pytest args.
   ([#8678](https://github.com/Microsoft/vscode-python/issues/8678))
1. Don't log error during settings migration if settings.json doesn't exist.
   ([#11354](https://github.com/Microsoft/vscode-python/issues/11354))
1. Fix casing of text in `unittest` patterns quickpick.
   (thanks [Anupama Nadig](https://github.com/anu-ka))
   ([#17093](https://github.com/Microsoft/vscode-python/issues/17093))
1. Use quickpick details for the "Use Python from `python.defaultInterpreterPath` setting" entry.
   ([#17124](https://github.com/Microsoft/vscode-python/issues/17124))
1. Fix refreshing progress display in the status bar.
   ([#17338](https://github.com/Microsoft/vscode-python/issues/17338))
1. Ensure we do not start a new discovery for an event if one is already scheduled.
   ([#17339](https://github.com/Microsoft/vscode-python/issues/17339))
1. Do not display workspace related envs if no workspace is open.
   ([#17358](https://github.com/Microsoft/vscode-python/issues/17358))
1. Ensure we correctly evaluate Unknown type before sending startup telemetry.
   ([#17362](https://github.com/Microsoft/vscode-python/issues/17362))
1. Fix for unittest discovery failure due to root id mismatch.
   ([#17386](https://github.com/Microsoft/vscode-python/issues/17386))
1. Improve pattern matching for shell detection on Windows.
   (thanks [Erik Demaine](https://github.com/edemaine/))
   ([#17426](https://github.com/Microsoft/vscode-python/issues/17426))
1. Changed the way of searching left bracket `[` in case of subsets of tests.
   (thanks [ilexei](https://github.com/ilexei))
   ([#17461](https://github.com/Microsoft/vscode-python/issues/17461))
1. Fix hang caused by loop in getting interpreter information.
   ([#17484](https://github.com/Microsoft/vscode-python/issues/17484))
1. Ensure database storage extension uses to track all storages does not grow unnecessarily.
   ([#17488](https://github.com/Microsoft/vscode-python/issues/17488))
1. Ensure all users use new discovery code regardless of their experiment settings.
   ([#17563](https://github.com/Microsoft/vscode-python/issues/17563))
1. Add timeout when discovery runs `conda info --json` command.
   ([#17576](https://github.com/Microsoft/vscode-python/issues/17576))
1. Use `conda-forge` channel when installing packages into conda environments.
   ([#17628](https://github.com/Microsoft/vscode-python/issues/17628))

### Code Health

1. Remove support for `rope`. Refactoring now supported via language servers.
   ([#10440](https://github.com/Microsoft/vscode-python/issues/10440))
1. Remove `pylintMinimalCheckers` setting. Syntax errors now reported via language servers.
   ([#13321](https://github.com/Microsoft/vscode-python/issues/13321))
1. Remove `ctags` support. Workspace symbols now supported via language servers.
   ([#16063](https://github.com/Microsoft/vscode-python/issues/16063))
1. Fix linting for some files in .eslintignore.
   ([#17181](https://github.com/Microsoft/vscode-python/issues/17181))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.9.3 (20 September 2021)

### Fixes

1. Fix `Python extension loading...` issue for users who have disabled telemetry.
   ([#17447](https://github.com/Microsoft/vscode-python/issues/17447))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.9.2 (13 September 2021)

### Fixes

1. Ensure line feeds are changed to CRLF in test messages.
   ([#17111](https://github.com/Microsoft/vscode-python/issues/17111))
1. Fix for `unittest` ModuleNotFoundError when discovering tests.
   ([#17363](https://github.com/Microsoft/vscode-python/issues/17363))
1. Ensure we block getting active interpreter on auto-selection.
   ([#17370](https://github.com/Microsoft/vscode-python/issues/17370))
1. Fix to handle undefined uri in debug in terminal command.
   ([#17374](https://github.com/Microsoft/vscode-python/issues/17374))
1. Fix for missing buttons for tests when using multiple test folders.
   ([#17378](https://github.com/Microsoft/vscode-python/issues/17378))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.9.1 (9 September 2021)

### Fixes

1. Fix for debug configuration used when no launch.json exists is still used after launch.json is created.
   ([#17353](https://github.com/Microsoft/vscode-python/issues/17353))
1. Ensure default python executable to use is 'python' instead of ''.
   ([#17089](https://github.com/Microsoft/vscode-python/issues/17089))
1. Ensure workspace interpreters are discovered and watched when in `pythonDiscoveryModuleWithoutWatcher` experiment.
   ([#17144](https://github.com/Microsoft/vscode-python/issues/17144))
1. Do path comparisons appropriately in the new discovery component.
   ([#17244](https://github.com/Microsoft/vscode-python/issues/17244))
1. Fix for test result not found for files starting with py.
   ([#17270](https://github.com/Microsoft/vscode-python/issues/17270))
1. Fix for unable to import when running unittest.
   ([#17280](https://github.com/Microsoft/vscode-python/issues/17280))
1. Fix for multiple folders in `pytest` args.
   ([#17281](https://github.com/Microsoft/vscode-python/issues/17281))
1. Fix issue with incomplete `unittest` runs.
   ([#17282](https://github.com/Microsoft/vscode-python/issues/17282))
1. Improve detecting lines when using testing wrappers.
   ([#17285](https://github.com/Microsoft/vscode-python/issues/17285))
1. Ensure we trigger discovery for the first time as part of extension activation.
   ([#17303](https://github.com/Microsoft/vscode-python/issues/17303))
1. Correctly indicate when interpreter refresh has finished.
   ([#17335](https://github.com/Microsoft/vscode-python/issues/17335))
1. Missing location info for `async def` functions.
   ([#17309](https://github.com/Microsoft/vscode-python/issues/17309))
1. For CI ensure `tensorboard` is installed in python 3 environments only.
   ([#17325](https://github.com/Microsoft/vscode-python/issues/17325))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.9.0 (1 September 2021)

### Enhancements

1. Added commands to select and run a set of tests.
   ([#3652](https://github.com/Microsoft/vscode-python/issues/3652))
1. Fix for tests should be re-discovered after switching environment.
   ([#5347](https://github.com/Microsoft/vscode-python/issues/5347))
1. Remove the testing functionality from the status bar.
   ([#8405](https://github.com/Microsoft/vscode-python/issues/8405))
1. Automatically detect new test file in test explorer.
   ([#8675](https://github.com/Microsoft/vscode-python/issues/8675))
1. Search test names in test explorer.
   ([#8836](https://github.com/Microsoft/vscode-python/issues/8836))
1. Added a command for displaying the test explorer.
   ([#9026](https://github.com/Microsoft/vscode-python/issues/9026))
1. Make "run all tests" icon gray instead of green.
   ([#9402](https://github.com/Microsoft/vscode-python/issues/9402))
1. Use VS Code's test UI instead of code lenses above tests.
   ([#10898](https://github.com/Microsoft/vscode-python/issues/10898))
1. Added command to run last executed test.
   ([#11864](https://github.com/Microsoft/vscode-python/issues/11864))
1. Fix for PyTest discovery can fail but not give any clue as to what the problem is.
   ([#12043](https://github.com/Microsoft/vscode-python/issues/12043))
1. Add shortcut to run the current test (at cursor position).
   ([#12218](https://github.com/Microsoft/vscode-python/issues/12218))
1. Run all tests in a multi-root workspace without prompting.
   ([#13147](https://github.com/Microsoft/vscode-python/issues/13147))
1. Plug into VS Code's Test UI.
   ([#15750](https://github.com/Microsoft/vscode-python/issues/15750))
1. Show notification to join insiders after 5 mins.
   ([#16833](https://github.com/Microsoft/vscode-python/issues/16833))
1. Update Simplified Chinese translation. (thanks [FiftysixTimes7](https://github.com/FiftysixTimes7))
   ([#16916](https://github.com/Microsoft/vscode-python/issues/16916))
1. Added Debug file button to editor run menu.
   ([#16924](https://github.com/Microsoft/vscode-python/issues/16924))
1. Cache last selection for debug configuration when debugging without launch.json.
   ([#16934](https://github.com/Microsoft/vscode-python/issues/16934))
1. Improve display of default interpreter and suggested interpreter in the interpreter selection quick pick.
   ([#16971](https://github.com/Microsoft/vscode-python/issues/16971))
1. Improve discovery component API.
   ([#17005](https://github.com/Microsoft/vscode-python/issues/17005))
1. Add a notification about Python 2.7 support, displayed whenever a tool is used or whenever debugging is started.
   ([#17009](https://github.com/Microsoft/vscode-python/issues/17009))
1. Add caching debug configuration behind experiment.
   ([#17025](https://github.com/Microsoft/vscode-python/issues/17025))
1. Do not query to get all interpreters where it's not needed in the extension code.
   ([#17030](https://github.com/Microsoft/vscode-python/issues/17030))
1. Add a warning prompt for the Microsoft Python Language Server deprecation.
   ([#17056](https://github.com/Microsoft/vscode-python/issues/17056))
1. Update to latest jedi-language-server.
   ([#17072](https://github.com/Microsoft/vscode-python/issues/17072))

### Fixes

1. Fix for test code lenses do not disappear even after disabling the unit tests.
   ([#1654](https://github.com/Microsoft/vscode-python/issues/1654))
1. Fix for code lens for a test class run under unittest doesn't show overall results for methods.
   ([#2382](https://github.com/Microsoft/vscode-python/issues/2382))
1. Fix for test code lens do not appear on initial activation of testing support.
   ([#2644](https://github.com/Microsoft/vscode-python/issues/2644))
1. Fix for "No tests ran, please check the configuration settings for the tests".
   ([#2660](https://github.com/Microsoft/vscode-python/issues/2660))
1. Fix for code lenses disappear on save, then re-appear when tabbing on/off the file.
   ([#2790](https://github.com/Microsoft/vscode-python/issues/2790))
1. Fix for code lenses for tests not showing up when test is defined on line 1.
   ([#3062](https://github.com/Microsoft/vscode-python/issues/3062))
1. Fix for command 'python.runtests' not found.
   ([#3591](https://github.com/Microsoft/vscode-python/issues/3591))
1. Fix for navigation to code doesn't work with parameterized tests.
   ([#4469](https://github.com/Microsoft/vscode-python/issues/4469))
1. Fix for tests are not being discovered at first in multiroot workspace.
   ([#4848](https://github.com/Microsoft/vscode-python/issues/4848))
1. Fix for tests not found after upgrade.
   ([#5417](https://github.com/Microsoft/vscode-python/issues/5417))
1. Fix for failed icon of the first failed test doesn't changed to running icon when using unittest framework.
   ([#5791](https://github.com/Microsoft/vscode-python/issues/5791))
1. Fix for failure details in unittest discovery are not always logged.
   ([#5889](https://github.com/Microsoft/vscode-python/issues/5889))
1. Fix for test results not updated if test is run via codelens.
   ([#6787](https://github.com/Microsoft/vscode-python/issues/6787))
1. Fix for "Run Current Test File" is not running tests, just discovering them.
   ([#7150](https://github.com/Microsoft/vscode-python/issues/7150))
1. Fix for testing code lenses don't show for remote sessions to a directory symlink.
   ([#7443](https://github.com/Microsoft/vscode-python/issues/7443))
1. Fix for discover test per folder icon is missing in multi-root workspace after upgrade.
   ([#7870](https://github.com/Microsoft/vscode-python/issues/7870))
1. Fix for clicking on a test in the Test Explorer does not navigate to the correct test.
   ([#8448](https://github.com/Microsoft/vscode-python/issues/8448))
1. Fix for if multiple tests have the same name, only one is run.
   ([#8761](https://github.com/Microsoft/vscode-python/issues/8761))
1. Fix for test failure is reported as a compile error.
   ([#9640](https://github.com/Microsoft/vscode-python/issues/9640))
1. Fix for discovering tests immediately after interpreter change often fails.
   ([#9854](https://github.com/Microsoft/vscode-python/issues/9854))
1. Fix for unittest module invoking wrong TestCase.
   ([#10972](https://github.com/Microsoft/vscode-python/issues/10972))
1. Fix for unable to navigate to test function.
   ([#11866](https://github.com/Microsoft/vscode-python/issues/11866))
1. Fix for running test fails trying to access non-existing file.
   ([#12403](https://github.com/Microsoft/vscode-python/issues/12403))
1. Fix for code lenses don't work after opening files from different projects in workspace.
   ([#12995](https://github.com/Microsoft/vscode-python/issues/12995))
1. Fix for the pytest icons keep spinning when run Test Method.
   ([#13285](https://github.com/Microsoft/vscode-python/issues/13285))
1. Test for any functionality related to testing doesn't work if language server is set to none.
   ([#13713](https://github.com/Microsoft/vscode-python/issues/13713))
1. Fix for cannot configure PyTest from UI.
   ([#13916](https://github.com/Microsoft/vscode-python/issues/13916))
1. Fix for test icons not updating when using pytest.
   ([#15260](https://github.com/Microsoft/vscode-python/issues/15260))
1. Fix for debugging tests is returning errors due to "unsupported status".
   ([#15736](https://github.com/Microsoft/vscode-python/issues/15736))
1. Removes `"request": "test"` as a config option. This can now be done with `"purpose": ["debug-test"]`.
   ([#15790](https://github.com/Microsoft/vscode-python/issues/15790))
1. Fix for "There was an error in running the tests" when stopping debugger.
   ([#16475](https://github.com/Microsoft/vscode-python/issues/16475))
1. Use the vscode API appropriately to find out what terminal is being used.
   ([#16577](https://github.com/Microsoft/vscode-python/issues/16577))
1. Fix unittest discovery. (thanks [JulianEdwards](https://github.com/bigjools))
   ([#16593](https://github.com/Microsoft/vscode-python/issues/16593))
1. Fix run `installPythonLibs` error in windows.
   ([#16844](https://github.com/Microsoft/vscode-python/issues/16844))
1. Fix for test welcome screen flashes on refresh.
   ([#16855](https://github.com/Microsoft/vscode-python/issues/16855))
1. Show re-run failed test button only when there are failed tests.
   ([#16856](https://github.com/Microsoft/vscode-python/issues/16856))
1. Triggering test refresh shows progress indicator.
   ([#16891](https://github.com/Microsoft/vscode-python/issues/16891))
1. Fix environment sorting for the `Python: Select Interpreter` command.
   (thanks [Marc Mueller](https://github.com/cdce8p))
   ([#16893](https://github.com/Microsoft/vscode-python/issues/16893))
1. Fix for unittest not getting discovered in all cases.
   ([#16902](https://github.com/Microsoft/vscode-python/issues/16902))
1. Don't show full path in the description for each test node.
   ([#16927](https://github.com/Microsoft/vscode-python/issues/16927))
1. Fix for no notification shown if test framework is not configured and run all tests is called.
   ([#16941](https://github.com/Microsoft/vscode-python/issues/16941))
1. In experiments service don't always `await` on `initialfetch` which can be slow depending on the network.
   ([#16959](https://github.com/Microsoft/vscode-python/issues/16959))
1. Ensure 2.7 unittest still work with new test support.
   ([#16962](https://github.com/Microsoft/vscode-python/issues/16962))
1. Fix issue with parsing test run ids for reporting test status.
   ([#16963](https://github.com/Microsoft/vscode-python/issues/16963))
1. Fix cell magics, line magics, and shell escaping in jupyter notebooks to not show error diagnostics.
   ([#17058](https://github.com/Microsoft/vscode-python/issues/17058))
1. Fix for testing ui update issue when `pytest` parameter has '/'.
   ([#17079](https://github.com/Microsoft/vscode-python/issues/17079))

### Code Health

1. Remove nose test support.
   ([#16371](https://github.com/Microsoft/vscode-python/issues/16371))
1. Remove custom start page experience in favor of VSCode's built-in walkthrough support.
   ([#16453](https://github.com/Microsoft/vscode-python/issues/16453))
1. Run auto-selection only once, and return the cached value for subsequent calls.
   ([#16735](https://github.com/Microsoft/vscode-python/issues/16735))
1. Add telemetry for when an interpreter gets auto-selected.
   ([#16764](https://github.com/Microsoft/vscode-python/issues/16764))
1. Remove pre-existing environment sorting algorithm and old rule-based auto-selection logic.
   ([#16935](https://github.com/Microsoft/vscode-python/issues/16935))
1. Add API to run code after extension activation.
   ([#16983](https://github.com/Microsoft/vscode-python/issues/16983))
1. Add telemetry sending time it took to load data from experiment service.
   ([#17011](https://github.com/Microsoft/vscode-python/issues/17011))
1. Improve reliability of virtual env tests and disable poetry watcher tests.
   ([#17088](https://github.com/Microsoft/vscode-python/issues/17088))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [poetry](https://pypi.org/project/poetry/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.8.3 (23 August 2021)

### Fixes

1. Update `vsce` to latest to fix metadata in VSIX for web extension.
   ([#17049](https://github.com/Microsoft/vscode-python/issues/17049))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.8.2 (19 August 2021)

### Enhancements

1. Add a basic web extension bundle.
   ([#16869](https://github.com/Microsoft/vscode-python/issues/16869))
1. Add basic Pylance support to the web extension.
   ([#16870](https://github.com/Microsoft/vscode-python/issues/16870))

### Code Health

1. Update telemetry client to support browser, plumb to Pylance.
   ([#16871](https://github.com/Microsoft/vscode-python/issues/16871))
1. Refactor language server middleware to work in the browser.
   ([#16872](https://github.com/Microsoft/vscode-python/issues/16872))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.8.1 (6 August 2021)

### Fixes

1. Fix random delay before running python code.
   ([#16768](https://github.com/Microsoft/vscode-python/issues/16768))
1. Fix the order of default unittest arguments.
   (thanks [Nikolay Kondratyev](https://github.com/kondratyev-nv/))
   ([#16882](https://github.com/Microsoft/vscode-python/issues/16882))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.8.0 (5 August 2021)

### Enhancements

1. Add new getting started page using VS Code's API to replace our custom start page.
   ([#16678](https://github.com/Microsoft/vscode-python/issues/16678))
1. Replace deprecated vscode-test with @vscode/test-electron for CI. (thanks [iChenLei](https://github.com/iChenLei))
   ([#16765](https://github.com/Microsoft/vscode-python/issues/16765))

### Code Health

1. Sort Settings Alphabetically. (thanks [bfarahdel](https://github.com/bfarahdel))
   ([#8406](https://github.com/Microsoft/vscode-python/issues/8406))
1. Changed default language server to `Pylance` for extension development. (thanks [jasleen101010](https://github.com/jasleen101010))
   ([#13007](https://github.com/Microsoft/vscode-python/issues/13007))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.7.2 (23 July 2021)

### Enhancements

1. Update `debugpy` with fix for https://github.com/microsoft/debugpy/issues/669.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.7.1 (21 July 2021)

### Enhancements

1. Update `debugpy` to the latest version.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.7.0 (20 July 2021)

### Enhancements

1. Support starting a TensorBoard session with a remote URL hosting log files.
   ([#16461](https://github.com/Microsoft/vscode-python/issues/16461))
1. Sort environments in the selection quickpick by assumed usefulness.
   ([#16520](https://github.com/Microsoft/vscode-python/issues/16520))

### Fixes

1. Add link to docs page on how to install the Python extension to README. (thanks [KamalSinghKhanna](https://github.com/KamalSinghKhanna))
   ([#15199](https://github.com/Microsoft/vscode-python/issues/15199))
1. Make test explorer only show file/folder names on nodes.
   (thanks [bobwalker99](https://github.com/bobwalker99))
   ([#16368](https://github.com/Microsoft/vscode-python/issues/16368))
1. Ensure we dispose restart command registration before we create a new instance of Jedi LS.
   ([#16441](https://github.com/Microsoft/vscode-python/issues/16441))
1. Ensure `shellIdentificationSource` is set correctly. (thanks [intrigus-lgtm](https://github.com/intrigus-lgtm))
   ([#16517](https://github.com/Microsoft/vscode-python/issues/16517))
1. Clear Notebook Cell diagnostics when deleting a cell or closing a notebook.
   ([#16528](https://github.com/Microsoft/vscode-python/issues/16528))
1. The `poetryPath` setting will correctly apply system variable substitutions. (thanks [Anthony Shaw](https://github.com/tonybaloney))
   ([#16607](https://github.com/Microsoft/vscode-python/issues/16607))
1. The Jupyter Notebook extension will install any missing dependencies using Poetry or Pipenv if those are the selected environments. (thanks [Anthony Shaw](https://github.com/tonybaloney))
   ([#16615](https://github.com/Microsoft/vscode-python/issues/16615))
1. Ensure we block on autoselection when no interpreter is explictly set by user.
   ([#16723](https://github.com/Microsoft/vscode-python/issues/16723))
1. Fix autoselection when opening a python file directly.
   ([#16733](https://github.com/Microsoft/vscode-python/issues/16733))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.6.0 (16 June 2021)

### Enhancements

1. Improved telemetry around the availability of `pip` for installation of Jupyter dependencies.
   ([#15937](https://github.com/Microsoft/vscode-python/issues/15937))
1. Move the Jupyter extension from being a hard dependency to an optional one, and display an informational prompt if Jupyter commands try to be executed from the Start Page.
   ([#16102](https://github.com/Microsoft/vscode-python/issues/16102))
1. Add an `enumDescriptions` key under the `python.languageServer` setting to describe all language server options.
   ([#16141](https://github.com/Microsoft/vscode-python/issues/16141))
1. Ensure users upgrade to v0.2.0 of the torch-tb-profiler TensorBoard plugin to access jump-to-source functionality.
   ([#16330](https://github.com/Microsoft/vscode-python/issues/16330))
1. Added `python.defaultInterpreterPath` setting at workspace level when in `pythonDeprecatePythonPath` experiment.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))
1. Added default Interpreter path entry at the bottom of the interpreter list.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))
1. Remove execution isolation script used to run tools.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))
1. Show `python.pythonPath` deprecation prompt when in `pythonDeprecatePythonPath` experiment.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))
1. Do not show safety prompt before auto-selecting a workspace interpreter.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))
1. Assume workspace interpreters are safe to execute for discovery.
   ([#16485](https://github.com/Microsoft/vscode-python/issues/16485))

### Fixes

1. Fixes a bug in the bandit linter where messages weren't being propagated to the editor.
   (thanks [Anthony Shaw](https://github.com/tonybaloney))
   ([#15561](https://github.com/Microsoft/vscode-python/issues/15561))
1. Workaround existing MIME type misconfiguration on Windows preventing TensorBoard from loading when starting TensorBoard.
   ([#16072](https://github.com/Microsoft/vscode-python/issues/16072))
1. Changed the version of npm to version 6 instead of 7 in the lockfile.
   ([#16208](https://github.com/Microsoft/vscode-python/issues/16208))
1. Ensure selected interpreter doesn't change when the extension is starting up and in experiment.
   ([#16291](https://github.com/Microsoft/vscode-python/issues/16291))
1. Fix issue with sys.prefix when getting environment details.
   ([#16355](https://github.com/Microsoft/vscode-python/issues/16355))
1. Activate the extension when selecting the command `Clear Internal Extension Cache (python.clearPersistentStorage)`.
   ([#16397](https://github.com/Microsoft/vscode-python/issues/16397))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.5.2 (14 May 2021)

### Fixes

1. Ensure Pylance is used with Python 2 if explicitly chosen
   ([#16246](https://github.com/microsoft/vscode-python/issues/16246))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.5.1 (13 May 2021)

### Fixes

1. Allow Pylance to be used with Python 2 if explicitly chosen
   ([#16204](https://github.com/microsoft/vscode-python/issues/16204))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.5.0 (10 May 2021)

### Enhancements

1. In an integrated TensorBoard session, if the jump to source request is for a file that does not exist on disk, allow the user to manually specify the file using the system file picker.
   ([#15695](https://github.com/Microsoft/vscode-python/issues/15695))
1. Allow running tests for all files within directories from test explorer.
   (thanks [Vladimir Kotikov](https://github.com/vladimir-kotikov))
   ([#15862](https://github.com/Microsoft/vscode-python/issues/15862))
1. Reveal selection in editor after jump to source command. (thanks [Wenlu Wang](https://github.com/Kingwl))
   ([#15924](https://github.com/Microsoft/vscode-python/issues/15924))
1. Add support for debugger code reloading.
   ([#16029](https://github.com/Microsoft/vscode-python/issues/16029))
1. Add Python: Refresh TensorBoard command, keybinding and editor title button to reload TensorBoard (equivalent to browser refresh).
   ([#16053](https://github.com/Microsoft/vscode-python/issues/16053))
1. Automatically indent following `match` and `case` statements. (thanks [Marc Mueller](https://github.com/cdce8p))
   ([#16104](https://github.com/Microsoft/vscode-python/issues/16104))
1. Bundle Pylance with the extension as an optional dependency.
   ([#16116](https://github.com/Microsoft/vscode-python/issues/16116))
1. Add a "Default" language server option, which dynamically chooses which language server to use.
   ([#16157](https://github.com/Microsoft/vscode-python/issues/16157))

### Fixes

1. Stop `unittest.TestCase` appearing as a test suite in the test explorer tree.
   (thanks [Bob](https://github.com/bobwalker99)).
   ([#15681](https://github.com/Microsoft/vscode-python/issues/15681))
1. Support `~` in WORKON_HOME and venvPath setting when in discovery experiment.
   ([#15788](https://github.com/Microsoft/vscode-python/issues/15788))
1. Fix TensorBoard integration in Remote-SSH by auto-configuring port forwards.
   ([#15807](https://github.com/Microsoft/vscode-python/issues/15807))
1. Ensure venvPath and venvFolders setting can only be set at User or Remote settings.
   ([#15947](https://github.com/Microsoft/vscode-python/issues/15947))
1. Added compatability with pypy3.7 interpreter.
   (thanks [Oliver Margetts](https://github.com/olliemath))
   ([#15968](https://github.com/Microsoft/vscode-python/issues/15968))
1. Revert linter installation prompt removal.
   ([#16027](https://github.com/Microsoft/vscode-python/issues/16027))
1. Ensure that `dataclasses` is installed when using Jedi LSP.
   ([#16119](https://github.com/Microsoft/vscode-python/issues/16119))

### Code Health

1. Log the failures when checking whether certain modules are installed or getting their version information.
   ([#15837](https://github.com/Microsoft/vscode-python/issues/15837))
1. Better logging (telemetry) when installation of Python packages fail.
   ([#15933](https://github.com/Microsoft/vscode-python/issues/15933))
1. Ensure npm packave `canvas` is setup as an optional dependency.
   ([#16127](https://github.com/Microsoft/vscode-python/issues/16127))
1. Add ability for Jupyter extension to pass addtional installer arguments.
   ([#16131](https://github.com/Microsoft/vscode-python/issues/16131))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.4.0 (19 April 2021)

### Enhancements

1. Add new command to report an Issue using the vscode-python template.
   ([#1119](https://github.com/microsoft/vscode-python/issues/1119))
1. Highlight `.pypirc`, `.pep8`, and `.pylintrc` as ini-files. (thanks [Jan Pilzer](https://github.com/Hirse))
   ([#11250](https://github.com/Microsoft/vscode-python/issues/11250))
1. Added `python.linting.cwd` to change the working directory of the linters. (thanks [Matthew Shirley](https://github.com/matthewshirley))
   ([#15170](https://github.com/Microsoft/vscode-python/issues/15170))
1. Remove prompt to install a linter when none are available.
   ([#15465](https://github.com/Microsoft/vscode-python/issues/15465))
1. Add jump to source integration with the PyTorch profiler TensorBoard plugin during TensorBoard sessions.
   ([#15641](https://github.com/Microsoft/vscode-python/issues/15641))
1. Drop prompt being displayed on first extension launch with a tip or a survey.
   ([#15647](https://github.com/Microsoft/vscode-python/issues/15647))
1. Use the updated logic for normalizing code sent to REPL as the default behavior.
   ([#15649](https://github.com/Microsoft/vscode-python/issues/15649))
1. Open TensorBoard webview panel in the active viewgroup on the first launch or the last viewgroup that it was moved to.
   ([#15708](https://github.com/Microsoft/vscode-python/issues/15708))
1. Support discovering Poetry virtual environments when in discovery experiment.
   ([#15765](https://github.com/Microsoft/vscode-python/issues/15765))
1. Install dev tools using Poetry when the poetry environment related to current folder is selected when in discovery experiment.
   ([#15786](https://github.com/Microsoft/vscode-python/issues/15786))
1. Add a refresh icon next to interpreter list.
   ([#15868](https://github.com/Microsoft/vscode-python/issues/15868))
1. Added command `Python: Clear internal extension cache` to clear extension related cache.
   ([#15883](https://github.com/Microsoft/vscode-python/issues/15883))

### Fixes

1. Fix `python.poetryPath` setting for installer on Windows.
   ([#9672](https://github.com/Microsoft/vscode-python/issues/9672))
1. Prevent mypy errors for other files showing in current file.
   (thanks [Steve Dignam](https://github.com/sbdchd))
   ([#10190](https://github.com/Microsoft/vscode-python/issues/10190))
1. Update pytest results when debugging. (thanks [djplt](https://github.com/djplt))
   ([#15353](https://github.com/Microsoft/vscode-python/issues/15353))
1. Ensure release level is set when using new environment discovery component.
   ([#15462](https://github.com/Microsoft/vscode-python/issues/15462))
1. Ensure right environment is activated in the terminal when installing Python packages.
   ([#15503](https://github.com/Microsoft/vscode-python/issues/15503))
1. Update nosetest results when debugging. (thanks [djplt](https://github.com/djplt))
   ([#15642](https://github.com/Microsoft/vscode-python/issues/15642))
1. Ensure any stray jedi process is terminated on language server dispose.
   ([#15644](https://github.com/Microsoft/vscode-python/issues/15644))
1. Fix README image indent for VSCode extension page. (thanks [Johnson](https://github.com/j3soon/))
   ([#15662](https://github.com/Microsoft/vscode-python/issues/15662))
1. Run `conda update` and not `conda install` when installing a compatible version of the `tensorboard` package.
   ([#15778](https://github.com/Microsoft/vscode-python/issues/15778))
1. Temporarily fix support for folders in interpreter path setting.
   ([#15782](https://github.com/Microsoft/vscode-python/issues/15782))
1. In completions.py: jedi.api.names has been deprecated, switch to new syntax.
   (thanks [moselhy](https://github.com/moselhy)).
   ([#15791](https://github.com/Microsoft/vscode-python/issues/15791))
1. Fixes activation of prefixed conda environments.
   ([#15823](https://github.com/Microsoft/vscode-python/issues/15823))

### Code Health

1. Deprecating on-type line formatter since it isn't used in newer Language servers.
   ([#15709](https://github.com/Microsoft/vscode-python/issues/15709))
1. Removing old way of feature deprecation where we showed notification for each feature we deprecated.
   ([#15714](https://github.com/Microsoft/vscode-python/issues/15714))
1. Remove unused code from extension.
   ([#15717](https://github.com/Microsoft/vscode-python/issues/15717))
1. Add telemetry for identifying torch.profiler users.
   ([#15825](https://github.com/Microsoft/vscode-python/issues/15825))
1. Update notebook code to not use deprecated .cells function on NotebookDocument.
   ([#15885](https://github.com/Microsoft/vscode-python/issues/15885))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.3.1 (23 March 2021)

### Fixes

1. Fix link to create a new Jupyter notebook in Python start page.
   ([#15621](https://github.com/Microsoft/vscode-python/issues/15621))
1. Upgrade to latest `jedi-language-server` and use it for python >= 3.6. Use `jedi<0.18` for python 2.7 and <=3.5.
   ([#15724](https://github.com/Microsoft/vscode-python/issues/15724))
1. Check if Python executable file exists instead of launching the Python process.
   ([#15725](https://github.com/Microsoft/vscode-python/issues/15725))
1. Fix for Go to definition needs to be pressed twice.
   (thanks [djplt](https://github.com/djplt))
   ([#15727](https://github.com/Microsoft/vscode-python/issues/15727))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.3.0 (16 March 2021)

### Enhancements

1. Activate the extension when the following files are found: `Pipfile`, `setup.py`, `requirements.txt`, `manage.py`, `app.py`
   (thanks [Dhaval Soneji](https://github.com/soneji))
   ([#4765](https://github.com/Microsoft/vscode-python/issues/4765))
1. Add optional user-level `python.tensorBoard.logDirectory` setting. When starting a TensorBoard session, use this setting if it is present instead of prompting the user to select a log directory.
   ([#15476](https://github.com/Microsoft/vscode-python/issues/15476))

### Fixes

1. Fix nosetests to run tests only once. (thanks [djplt](https://github.com/djplt))
   ([#6043](https://github.com/Microsoft/vscode-python/issues/6043))
1. Make on-enter behaviour after `raise` much more like that of `return`, fixing
   handling in the case of pressing enter to wrap the parentheses of an exception
   call.
   (thanks [PeterJCLaw](https://github.com/PeterJCLaw))
   ([#10583](https://github.com/Microsoft/vscode-python/issues/10583))
1. Add configuration debugpyPath. (thanks [djplt](https://github.com/djplt))
   ([#14631](https://github.com/Microsoft/vscode-python/issues/14631))
1. Fix Mypy linter pointing to wrong column number (off by one).
   (thanks [anttipessa](https://github.com/anttipessa/), [haalto](https://github.com/haalto/), [JeonCD](https://github.com/JeonCD/) and [junskU](https://github.com/junskU))
   ([#14978](https://github.com/Microsoft/vscode-python/issues/14978))
1. Show each python.org install only once on Mac when in discovery experiment.
   ([#15302](https://github.com/Microsoft/vscode-python/issues/15302))
1. All relative interpreter path reported start with `~` when in discovery experiment.
   ([#15312](https://github.com/Microsoft/vscode-python/issues/15312))
1. Remove FLASK_DEBUG from flask debug configuration to allow reload.
   ([#15373](https://github.com/Microsoft/vscode-python/issues/15373))
1. Install using pipenv only if the selected environment is pipenv which is related to workspace folder, when in discovery experiment.
   ([#15489](https://github.com/Microsoft/vscode-python/issues/15489))
1. Fixes issue with detecting new installations of Windows Store python.
   ([#15541](https://github.com/Microsoft/vscode-python/issues/15541))
1. Add `cached-property` package to bundled python packages. This is needed by `jedi-language-server` running on `python 3.6` and `python 3.7`.
   ([#15566](https://github.com/Microsoft/vscode-python/issues/15566))
1. Remove limit on workspace symbols when using Jedi language server.
   ([#15576](https://github.com/Microsoft/vscode-python/issues/15576))
1. Use shorter paths for python interpreter when possible.
   ([#15580](https://github.com/Microsoft/vscode-python/issues/15580))
1. Ensure that jedi language server uses jedi shipped with the extension.
   ([#15586](https://github.com/Microsoft/vscode-python/issues/15586))
1. Updates to Proposed API, and fix the failure in VS Code Insider tests.
   ([#15638](https://github.com/Microsoft/vscode-python/issues/15638))

### Code Health

1. Add support for "Trusted Workspaces".

    "Trusted Workspaces" is an upcoming feature in VS Code. (See:
    https://github.com/microsoft/vscode/issues/106488.) For now you need
    the following for the experience:

    - the latest VS Code Insiders
    - add `"workspace.trustEnabled": true` to your user settings.json

    At that point, when the Python extension would normally activate, VS Code
    will prompt you about whether or not the current workspace is trusted.
    If not then the extension will be disabled (but only for that workspace).
    As soon as the workspace is marked as trusted, the extension will
    activate.
    ([#15525](https://github.com/Microsoft/vscode-python/issues/15525))

1. Updates to the VSCode Notebook API.
   ([#15567](https://github.com/Microsoft/vscode-python/issues/15567))
1. Fix failing smoke tests on CI.
   ([#15573](https://github.com/Microsoft/vscode-python/issues/15573))
1. Update VS Code engine to 1.54.0
   ([#15604](https://github.com/Microsoft/vscode-python/issues/15604))
1. Use `onReady` method available on language client to ensure language server is ready.
   ([#15612](https://github.com/Microsoft/vscode-python/issues/15612))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.2.4 (9 March 2021)

### Fixes

1. Update to latest VSCode Notebook API.
   ([#15415](https://github.com/Microsoft/vscode-python/issues/15415))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.2.3 (8 March 2021)

### Fixes

1. Add event handlers to stream error events to prevent process from exiting due to errors in process stdout & stderr streams.
   ([#15395](https://github.com/Microsoft/vscode-python/issues/15395))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [jedi-language-server](https://pypi.org/project/jedi-language-server/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.2.2 (5 March 2021)

### Fixes

1. Fixes issue with Jedi Language Server telemetry.
   ([#15419](https://github.com/microsoft/vscode-python/issues/15419))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.2.1 (19 February 2021)

### Fixes

1. Fix for missing pyenv virtual environments from selectable environments.
   ([#15439](https://github.com/Microsoft/vscode-python/issues/15439))
1. Register Jedi regardless of what language server is configured.
   ([#15452](https://github.com/Microsoft/vscode-python/issues/15452))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.2.0 (17 February 2021)

### Enhancements

1. Use Language Server Protocol to work with Jedi.
   ([#11995](https://github.com/Microsoft/vscode-python/issues/11995))

### Fixes

1. Don't suggest insiders program nor show start page when in Codespaces.
   ([#14833](https://github.com/Microsoft/vscode-python/issues/14833))
1. Fix description of `Pyramid` debug config.
   (thanks [vvijayalakshmi21](https://github.com/vvijayalakshmi21/))
   ([#5479](https://github.com/Microsoft/vscode-python/issues/5479))
1. Refactored the Enable Linting command to provide the user with a choice of "Enable" or "Disable" linting to make it more intuitive. (thanks [henryboisdequin](https://github.com/henryboisdequin))
   ([#8800](https://github.com/Microsoft/vscode-python/issues/8800))
1. Fix marketplace links in popups opening a non-browser VS Code instance in Codespaces.
   ([#14264](https://github.com/Microsoft/vscode-python/issues/14264))
1. Fixed the error command suggested when attempting to use "debug tests" configuration
   (Thanks [Shahzaib paracha](https://github.com/ShahzaibParacha))
   ([#14729](https://github.com/Microsoft/vscode-python/issues/14729))
1. Single test run fails sometimes if there is an error in unrelated file imported during discovery.
   (thanks [Szymon Janota](https://github.com/sjanota/))
   ([#15147](https://github.com/Microsoft/vscode-python/issues/15147))
1. Re-enable localization on the start page. It was accidentally
   disabled in October when the Jupyter extension was split out.
   ([#15232](https://github.com/Microsoft/vscode-python/issues/15232))
1. Ensure target environment is activated in the terminal when running install scripts.
   ([#15285](https://github.com/Microsoft/vscode-python/issues/15285))
1. Allow support for using notebook APIs in the VS code stable build.
   ([#15364](https://github.com/Microsoft/vscode-python/issues/15364))

### Code Health

1. Raised the minimum required VS Code version to 1.51.
   ([#15237](https://github.com/Microsoft/vscode-python/issues/15237))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2021.1.0 (21 January 2021)

### Enhancements

1. Remove code snippets (you can copy the
   [old snippets](https://github.com/microsoft/vscode-python/blob/2020.12.424452561/snippets/python.json)
   and use them as
   [your own snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets)).
   ([#14781](https://github.com/Microsoft/vscode-python/issues/14781))
1. Add PYTHONPATH to the language server settings response.
   ([#15106](https://github.com/Microsoft/vscode-python/issues/15106))
1. Integration with the bandit linter will highlight the variable, function or method for an issue instead of the entire line.
   Requires latest version of the bandit package to be installed.
   (thanks [Anthony Shaw](https://github.com/tonybaloney))
   ([#15003](https://github.com/Microsoft/vscode-python/issues/15003))
1. Translated some more of the Python Extension messages in Simplified Chinese.
   (thanks [Shinoyasan](https://github.com/shinoyasan/))
   ([#15079](https://github.com/Microsoft/vscode-python/issues/15079))
1. Update Simplified Chinese translation.
   (thanks [Fiftysixtimes7](https://github.com/FiftysixTimes7))
   ([#14997](https://github.com/Microsoft/vscode-python/issues/14997))

### Fixes

1. Fix environment variables not refreshing on env file edits.
   ([#3805](https://github.com/Microsoft/vscode-python/issues/3805))
1. fix npm audit[high]: [Remote Code Execution](npmjs.com/advisories/1548)
   ([#14640](https://github.com/Microsoft/vscode-python/issues/14640))
1. Ignore false positives when scraping environment variables.
   ([#14812](https://github.com/Microsoft/vscode-python/issues/14812))
1. Fix unittest discovery when using VS Code Insiders by using Inversify's `skipBaseClassChecks` option.
   ([#14962](https://github.com/Microsoft/vscode-python/issues/14962))
1. Make filtering in findInterpretersInDir() faster.
   ([#14983](https://github.com/Microsoft/vscode-python/issues/14983))
1. Remove the Buffer() is deprecated warning from Developer tools. ([#15045](https://github.com/microsoft/vscode-python/issues/15045))
   ([#15045](https://github.com/Microsoft/vscode-python/issues/15045))
1. Add support for pytest 6 options.
   ([#15094](https://github.com/Microsoft/vscode-python/issues/15094))

### Code Health

1. Update to Node 12.20.0.
   ([#15046](https://github.com/Microsoft/vscode-python/issues/15046))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.12.2 (15 December 2020)

### Fixes

1. Only activate discovery component when in experiment.
   ([#14977](https://github.com/Microsoft/vscode-python/issues/14977))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.12.1 (15 December 2020)

### Fixes

1. Fix for extension loading issue in the latest release.
   ([#14977](https://github.com/Microsoft/vscode-python/issues/14977))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.12.0 (14 December 2020)

### Enhancements

1. FastAPI debugger feature.
   (thanks [Marcelo Trylesinski](https://github.com/kludex/)!)
   ([#14247](https://github.com/Microsoft/vscode-python/issues/14247))
1. Put linter prompt behind an experiment flag.
   ([#14760](https://github.com/Microsoft/vscode-python/issues/14760))
1. Add Python: Launch TensorBoard command behind an experiment.
   ([#14806](https://github.com/Microsoft/vscode-python/issues/14806))
1. Detect tfevent files in workspace and prompt to launch native TensorBoard session.
   ([#14807](https://github.com/Microsoft/vscode-python/issues/14807))
1. Use default color for "Select Python interpreter" on the status bar.
   (thanks [Daniel Rodriguez](https://github.com/danielfrg)!)
   ([#14859](https://github.com/Microsoft/vscode-python/issues/14859))
1. Experiment to use the new environment discovery module.
   ([#14868](https://github.com/Microsoft/vscode-python/issues/14868))
1. Add experimentation API support for Pylance.
   ([#14895](https://github.com/Microsoft/vscode-python/issues/14895))

### Fixes

1. Format `.pyi` files correctly when using Black.
   (thanks [Steve Dignam](https://github.com/sbdchd)!)
   ([#13341](https://github.com/Microsoft/vscode-python/issues/13341))
1. Add `node-loader` to support `webpack` for `fsevents` package.
   ([#14664](https://github.com/Microsoft/vscode-python/issues/14664))
1. Don't show play icon in diff editor.
   (thanks [David Sanders](https://github.com/dsanders11)!)
   ([#14800](https://github.com/Microsoft/vscode-python/issues/14800))
1. Do not show "You need to select a Python interpreter before you start debugging" when "python" in debug configuration is invalid.
   ([#14814](https://github.com/Microsoft/vscode-python/issues/14814))
1. Fix custom language server message handlers being registered too late in startup.
   ([#14893](https://github.com/Microsoft/vscode-python/issues/14893))

### Code Health

1. Modified the errors generated when `launch.json` is not properly configured to be more specific about which fields are missing.
   (thanks [Shahzaib Paracha](https://github.com/ShahzaibP)!)
   ([#14739](https://github.com/Microsoft/vscode-python/issues/14739))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.11.1 (17 November 2020)

### Enhancements

1. Replaced "pythonPath" debug configuration property with "python".
   ([#12462](https://github.com/Microsoft/vscode-python/issues/12462))

### Fixes

1. Fix for Process Id Picker no longer showing up
   ([#14678](https://github.com/Microsoft/vscode-python/issues/14678)))
1. Fix workspace symbol searching always returning empty.
   ([#14727](https://github.com/Microsoft/vscode-python/issues/14727))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.11.0 (11 November 2020)

### Enhancements

1. Update shipped debugger wheels to python 3.8.
   ([#14614](https://github.com/Microsoft/vscode-python/issues/14614))

### Fixes

1. Update the logic for parsing and sending selected code to the REPL.
   ([#14048](https://github.com/Microsoft/vscode-python/issues/14048))
1. Fix "TypeError: message must be set" error when debugging with `pytest`.
   ([#14067](https://github.com/Microsoft/vscode-python/issues/14067))
1. When sending code to the REPL, read input from `sys.stdin` instead of passing it as an argument.
   ([#14471](https://github.com/Microsoft/vscode-python/issues/14471))

### Code Health

1. Code for Jupyter Notebooks support has been refactored into the Jupyter extension, which is now a dependency for the Python extension

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.10.0 (27 October 2020)

### Enhancements

1. `debugpy` updated to latest stable version.
1. Make data viewer openable from the variables window context menu while debugging.
   ([#14406](https://github.com/Microsoft/vscode-python/issues/14406))
1. Do not opt users out of the insiders program if they have a stable version installed.
   ([#14090](https://github.com/Microsoft/vscode-python/issues/14090))

### Fixes

1. Make sure not to set `__file__` unless necessary as this can mess up some modules (like multiprocessing).
   ([#12530](https://github.com/Microsoft/vscode-python/issues/12530))
1. Fix isolate script to only remove current working directory.
   ([#13942](https://github.com/Microsoft/vscode-python/issues/13942))
1. Make sure server name and kernel name show up when connecting.
   ([#13955](https://github.com/Microsoft/vscode-python/issues/13955))
1. Have Custom Editors load on editor show unless autostart is disabled.
   ([#14016](https://github.com/Microsoft/vscode-python/issues/14016))
1. For exporting, first check the notebook or interactive window interpreter before the jupyter selected interpreter.
   ([#14143](https://github.com/Microsoft/vscode-python/issues/14143))
1. Fix interactive debugging starting (trimQuotes error).
   ([#14212](https://github.com/Microsoft/vscode-python/issues/14212))
1. Use the kernel defined in the metadata of Notebook instead of using the default workspace interpreter.
   ([#14213](https://github.com/Microsoft/vscode-python/issues/14213))
1. Fix latex output not showing up without a 'display' call.
   ([#14216](https://github.com/Microsoft/vscode-python/issues/14216))
1. Fix markdown cell marker when exporting a notebook to a Python script.
   ([#14359](https://github.com/Microsoft/vscode-python/issues/14359))

### Code Health

1. Add Windows unit tests to the PR validation pipeline.
   ([#14013](https://github.com/Microsoft/vscode-python/issues/14013))
1. Functional test failures related to kernel ports overlapping.
   ([#14290](https://github.com/Microsoft/vscode-python/issues/14290))
1. Change message from `IPython kernel` to `Jupyter kernel`.
   ([#14309](https://github.com/Microsoft/vscode-python/issues/14309))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.9.2 (6 October 2020)

### Fixes

1. Support nbconvert version 6+ for exporting notebooks to python code.
   ([#14169](https://github.com/Microsoft/vscode-python/issues/14169))
1. Do not escape output in the actual ipynb file.
   ([#14182](https://github.com/Microsoft/vscode-python/issues/14182))
1. Fix exporting from the interactive window.
   ([#14210](https://github.com/Microsoft/vscode-python/issues/14210))
1. Fix for CVE-2020-16977
   ([CVE-2020-16977](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-16977))
1. Fix for CVE-2020-17163
   ([CVE-2020-17163](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17163))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.9.1 (29 September 2020)

### Fixes

1. Fix IPyKernel install issue with windows paths.
   ([#13493](https://github.com/microsoft/vscode-python/issues/13493))
1. Fix escaping of output to encode HTML chars correctly.
   ([#5678](https://github.com/Microsoft/vscode-python/issues/5678))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.9.0 (23 September 2020)

### Enhancements

1. Docstrings are added to `class` and `def` snippets (thanks [alannt777](https://github.com/alannt777/)).
   ([#5578](https://github.com/Microsoft/vscode-python/issues/5578))
1. Upgraded isort to `5.3.2`.
   ([#12932](https://github.com/Microsoft/vscode-python/issues/12932))
1. Remove default "--no-reload" from debug configurations.
   (thanks [ian910297](https://github.com/ian910297))
   ([#13061](https://github.com/Microsoft/vscode-python/issues/13061))
1. Update API to expose events for cell excecution and kernel restart.
   ([#13306](https://github.com/Microsoft/vscode-python/issues/13306))
1. Show a general warning prompt pointing to the upgrade guide when users attempt to run isort5 using deprecated settings.
   ([#13716](https://github.com/Microsoft/vscode-python/issues/13716))
1. Upgrade isort to `5.5.2`.
   ([#13831](https://github.com/Microsoft/vscode-python/issues/13831))
1. Enable custom editor support in stable VS code at 20%.
   ([#13890](https://github.com/Microsoft/vscode-python/issues/13890))
1. Upgraded to isort `5.5.3`.
   ([#14027](https://github.com/Microsoft/vscode-python/issues/14027))

### Fixes

1. Fixed the output being trimmed. Tables that start with empty space will now display correctly.
   ([#10270](https://github.com/Microsoft/vscode-python/issues/10270))
1. #11729
   Prevent test discovery from picking up stdout from low level file descriptors.
   (thanks [Ryo Miyajima](https://github.com/sergeant-wizard))
   ([#11729](https://github.com/Microsoft/vscode-python/issues/11729))
1. Fix opening new blank notebooks when using the VS code custom editor API.
   ([#12245](https://github.com/Microsoft/vscode-python/issues/12245))
1. Support starting kernels with the same directory as the notebook.
   ([#12760](https://github.com/Microsoft/vscode-python/issues/12760))
1. Fixed `Sort imports` command with setuptools version `49.2`.
   ([#12949](https://github.com/Microsoft/vscode-python/issues/12949))
1. Do not fail interpreter discovery if accessing Windows registry fails.
   ([#12962](https://github.com/Microsoft/vscode-python/issues/12962))
1. Show error output from nbconvert when exporting a notebook fails.
   ([#13229](https://github.com/Microsoft/vscode-python/issues/13229))
1. Prevent daemon from trying to prewarm an execution service.
   ([#13258](https://github.com/Microsoft/vscode-python/issues/13258))
1. Respect stop on error setting for executing cells in native notebook.
   ([#13338](https://github.com/Microsoft/vscode-python/issues/13338))
1. Native notebook launch doesn't hang if the kernel does not start, and notifies the user of the failure. Also does not show the first cell as executing until the kernel is actually started and connected.
   ([#13409](https://github.com/Microsoft/vscode-python/issues/13409))
1. Fix path to isolated script on Windows shell_exec.
   ([#13493](https://github.com/Microsoft/vscode-python/issues/13493))
1. Updating other cells with display.update does not work in native notebooks.
   ([#13509](https://github.com/Microsoft/vscode-python/issues/13509))
1. Fix for notebook using the first kernel every time. It will now use the language in the notebook to determine the most appropriate kernel.
   ([#13520](https://github.com/Microsoft/vscode-python/issues/13520))
1. Shift+enter should execute current cell and select the next cell.
   ([#13553](https://github.com/Microsoft/vscode-python/issues/13553))
1. Fixes typo in export command registration.
   (thanks [Anton Kosyakov](https://github.com/akosyakov/))
   ([#13612](https://github.com/Microsoft/vscode-python/issues/13612))
1. Fix the behavior of the 'python.showStartPage' setting.
   ([#13706](https://github.com/Microsoft/vscode-python/issues/13706))
1. Correctly install ipykernel when launching from an interpreter.
   ([#13956](https://github.com/Microsoft/vscode-python/issues/13956))
1. Backup on custom editors is being ignored.
   ([#13981](https://github.com/Microsoft/vscode-python/issues/13981))

### Code Health

1. Fix bandit issues in vscode_datascience_helpers.
   ([#13103](https://github.com/Microsoft/vscode-python/issues/13103))
1. Cast type to `any` to get around issues with `ts-node` (`ts-node` is used by `nyc` for code coverage).
   ([#13411](https://github.com/Microsoft/vscode-python/issues/13411))
1. Drop support for Python 3.5 (it reaches end-of-life on September 13, 2020 and isort 5 does not support it).
   ([#13459](https://github.com/Microsoft/vscode-python/issues/13459))
1. Fix nightly flake test issue with timeout waiting for kernel.
   ([#13501](https://github.com/Microsoft/vscode-python/issues/13501))
1. Disable sorting tests for Python 2.7 as isort5 is not compatible with Python 2.7.
   ([#13542](https://github.com/Microsoft/vscode-python/issues/13542))
1. Fix nightly flake test current directory failing test.
   ([#13605](https://github.com/Microsoft/vscode-python/issues/13605))
1. Rename the `master` branch to `main`.
   ([#13645](https://github.com/Microsoft/vscode-python/issues/13645))
1. Remove usage of the terms "blacklist" and "whitelist".
   ([#13647](https://github.com/Microsoft/vscode-python/issues/13647))
1. Fix a test failure and warning when running test adapter tests under pytest 5.
   ([#13726](https://github.com/Microsoft/vscode-python/issues/13726))
1. Remove unused imports from data science ipython test files.
   ([#13729](https://github.com/Microsoft/vscode-python/issues/13729))
1. Fix nighly failure with beakerx.
   ([#13734](https://github.com/Microsoft/vscode-python/issues/13734))

## 2020.8.6 (15 September 2020)

### Fixes

1. Workaround problem caused by https://github.com/microsoft/vscode/issues/106547

## 2020.8.6 (15 September 2020)

### Fixes

1. Workaround problem caused by https://github.com/microsoft/vscode/issues/106547

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.5 (9 September 2020)

### Fixes

1. Experiments.json is now read from 'main' branch.
   ([#13839](https://github.com/Microsoft/vscode-python/issues/13839))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.4 (2 September 2020)

### Enhancements

1. Make Jupyter Server name clickable to select Jupyter server.
   ([#13656](https://github.com/Microsoft/vscode-python/issues/13656))

### Fixes

1. Fixed connection to a Compute Instance from the quickpicks history options.
   ([#13387](https://github.com/Microsoft/vscode-python/issues/13387))
1. Fixed the behavior of the 'python.showStartPage' setting.
   ([#13347](https://github.com/microsoft/vscode-python/issues/13347))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.3 (31 August 2020)

### Enhancements

1. Add telemetry about the install source for the extension.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.2 (27 August 2020)

### Enhancements

1. Update "Tip" notification for new users to either show the existing tip, a link to a feedback survey or nothing.
   ([#13535](https://github.com/Microsoft/vscode-python/issues/13535))

### Fixes

1. Fix saving during close and auto backup to actually save a notebook.
   ([#11711](https://github.com/Microsoft/vscode-python/issues/11711))
1. Show the server display string that the user is going to connect to after selecting a compute instance and reloading the window.
   ([#13551](https://github.com/Microsoft/vscode-python/issues/13551))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.1 (20 August 2020)

### Fixes

1. Update LSP to latest to resolve problems with LS settings.
   ([#13511](https://github.com/microsoft/vscode-python/pull/13511))
1. Update debugger to address terminal input issues.
1. Added tooltip to indicate status of server connection
   ([#13543](https://github.com/Microsoft/vscode-python/issues/13543))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.8.0 (12 August 2020)

### Enhancements

1. Cell id and cell metadata are now passed as the metadata field for execute_request messages.
   (thanks [stisa](https://github.com/stisa/))
   ([#13252](https://github.com/Microsoft/vscode-python/issues/13252))
1. Add "Restart Language Server" command.
   ([#3073](https://github.com/Microsoft/vscode-python/issues/3073))
1. Support multiple and per file interactive windows. See the description for the new 'python.dataScience.interactiveWindowMode' setting.
   ([#3104](https://github.com/Microsoft/vscode-python/issues/3104))
1. Add cell editing shortcuts for python interactive cells. (thanks [@earthastronaut](https://github.com/earthastronaut/)).
   ([#12414](https://github.com/Microsoft/vscode-python/issues/12414))
1. Allow `python.dataScience.runStartupCommands` to be an array. (thanks [@janosh](https://github.com/janosh)).
   ([#12827](https://github.com/Microsoft/vscode-python/issues/12827))
1. Remember remote kernel ids when reopening notebooks.
   ([#12828](https://github.com/Microsoft/vscode-python/issues/12828))
1. The file explorer dialog now has an appropriate title when browsing for an interpreter. (thanks [ziebam](https://github.com/ziebam)).
   ([#12959](https://github.com/Microsoft/vscode-python/issues/12959))
1. Warn users if they are connecting over http without a token.
   ([#12980](https://github.com/Microsoft/vscode-python/issues/12980))
1. Allow a custom display string for remote servers as part of the remote Jupyter server provider extensibility point.
   ([#12988](https://github.com/Microsoft/vscode-python/issues/12988))
1. Update to the latest version of [`jedi`](https://github.com/davidhalter/jedi) (`0.17.2`). This adds support for Python 3.9 and fixes some bugs, but is expected to be the last release to support Python 2.7 and 3.5. (thanks [Peter Law](https://github.com/PeterJCLaw/)).
   ([#13037](https://github.com/Microsoft/vscode-python/issues/13037))
1. Expose `Pylance` setting in `python.languageServer`. If [Pylance extension](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) is not installed, prompt user to install it.
   ([#13122](https://github.com/Microsoft/vscode-python/issues/13122))
1. Added "pythonArgs" to debugpy launch.json schema.
   ([#13218](https://github.com/Microsoft/vscode-python/issues/13218))
1. Use jupyter inspect to get signature of dynamic functions in notebook editor when language server doesn't provide enough hint.
   ([#13259](https://github.com/Microsoft/vscode-python/issues/13259))
1. The gather icon will change and get disabled while gather is executing.
   ([#13177](https://github.com/microsoft/vscode-python/issues/13177))

### Fixes

1. Gathered notebooks will now use the same kernelspec as the notebook it was created from.
   ([#10924](https://github.com/Microsoft/vscode-python/issues/10924))
1. Don't loop selection through all failed tests every time tests are run.
   ([#11743](https://github.com/Microsoft/vscode-python/issues/11743))
1. Some tools (like pytest) rely on the existence of `sys.path[0]`, so
   deleting it in the isolation script can sometimes cause problems. The
   solution is to point `sys.path[0]` to a bogus directory that we know
   does not exist (assuming noone modifies the extension install dir).
   ([#11875](https://github.com/Microsoft/vscode-python/issues/11875))
1. Fix missing css for some ipywidget output.
   ([#12202](https://github.com/Microsoft/vscode-python/issues/12202))
1. Delete backing untitled ipynb notebook files as soon as the remote session has been created.
   ([#12510](https://github.com/Microsoft/vscode-python/issues/12510))
1. Make the data science variable explorer support high contrast color theme.
   ([#12766](https://github.com/Microsoft/vscode-python/issues/12766))
1. The change in PR #12795 led to one particular test suite to take longer
   to run. Here we increase the timeout for that suite to get the test
   passing.
   ([#12833](https://github.com/Microsoft/vscode-python/issues/12833))
1. Refactor data science filesystem usage to correctly handle files which are potentially remote.
   ([#12931](https://github.com/Microsoft/vscode-python/issues/12931))
1. Allow custom Jupyter server URI providers to have an expiration on their authorization headers.
   ([#12987](https://github.com/Microsoft/vscode-python/issues/12987))
1. If a webpanel fails to load, dispose our webviewhost so that it can try again.
   ([#13106](https://github.com/Microsoft/vscode-python/issues/13106))
1. Ensure terminal is not shown or activated if hideFromUser is set to true.
   ([#13117](https://github.com/Microsoft/vscode-python/issues/13117))
1. Do not automatically start kernel for untrusted notebooks.
   ([#13124](https://github.com/Microsoft/vscode-python/issues/13124))
1. Fix settings links to open correctly in the notebook editor.
   ([#13156](https://github.com/Microsoft/vscode-python/issues/13156))
1. "a" and "b" Jupyter shortcuts should not automatically enter edit mode.
   ([#13165](https://github.com/Microsoft/vscode-python/issues/13165))
1. Scope custom notebook keybindings to Jupyter Notebooks.
   ([#13172](https://github.com/Microsoft/vscode-python/issues/13172))
1. Rename "Count" column in variable explorer to "Size".
   ([#13205](https://github.com/Microsoft/vscode-python/issues/13205))
1. Handle `Save As` of preview Notebooks.
   ([#13235](https://github.com/Microsoft/vscode-python/issues/13235))

### Code Health

1. Move non-mock jupyter nightly tests to use raw kernel by default.
   ([#10772](https://github.com/Microsoft/vscode-python/issues/10772))
1. Add new services to data science IOC container and rename misspelled service.
   ([#12809](https://github.com/Microsoft/vscode-python/issues/12809))
1. Disable Notebook icons when Notebook is not trusted.
   ([#12893](https://github.com/Microsoft/vscode-python/issues/12893))
1. Removed control tower code for the start page.
   ([#12919](https://github.com/Microsoft/vscode-python/issues/12919))
1. Add better tests for trusted notebooks in the classic notebook editor.
   ([#12966](https://github.com/Microsoft/vscode-python/issues/12966))
1. Custom renderers for `png/jpeg` images in `Notebooks`.
   ([#12977](https://github.com/Microsoft/vscode-python/issues/12977))
1. Fix broken nightly variable explorer tests.
   ([#13075](https://github.com/Microsoft/vscode-python/issues/13075))
1. Fix nightly flake test failures for startup and shutdown native editor test.
   ([#13171](https://github.com/Microsoft/vscode-python/issues/13171))
1. Fix failing interactive window and variable explorer tests.
   ([#13269](https://github.com/Microsoft/vscode-python/issues/13269))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [Pylance](https://github.com/microsoft/pylance-release)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.7.1 (22 July 2020)

1.  Fix language server setting when provided an invalid value, send config event more consistently.
    ([#13064](https://github.com/Microsoft/vscode-python/pull/13064))
1.  Add banner for pylance, and remove old LS experiment.
    ([#12817](https://github.com/microsoft/vscode-python/pull/12817))

## 2020.7.0 (16 July 2020)

### Enhancements

1. Support connecting to Jupyter hub servers. Use either the base url of the server (i.e. 'https://111.11.11.11:8000') or your user folder (i.e. 'https://111.11.11.11:8000/user/theuser).
   Works with password authentication.
   ([#9679](https://github.com/Microsoft/vscode-python/issues/9679))
1. Added "argsExpansion" to debugpy launch.json schema.
   ([#11678](https://github.com/Microsoft/vscode-python/issues/11678))
1. The extension will now automatically load if a `pyproject.toml` file is present in the workspace root directory.
   (thanks [Brandon White](https://github.com/BrandonLWhite))
   ([#12056](https://github.com/Microsoft/vscode-python/issues/12056))
1. Add ability to check and update whether a notebook is trusted.
   ([#12146](https://github.com/Microsoft/vscode-python/issues/12146))
1. Support formatting of Notebook Cells when using the VS Code Insiders API for Notebooks.
   ([#12195](https://github.com/Microsoft/vscode-python/issues/12195))
1. Added exporting notebooks to HTML.
   ([#12375](https://github.com/Microsoft/vscode-python/issues/12375))
1. Change stock launch.json "attach" config to use "connect".
   ([#12446](https://github.com/Microsoft/vscode-python/issues/12446))
1. Update to the latest version of [`jedi`](https://github.com/davidhalter/jedi) (`0.17.1`). This brings completions for Django (via [`django-stubs`](https://github.com/typeddjango/django-stubs)) as well as support for Python 3.9 and various bugfixes (mostly around generic type annotations). (thanks [Peter Law](https://gitlab.com/PeterJCLaw/))
   ([#12486](https://github.com/Microsoft/vscode-python/issues/12486))
1. Prompt users that we have deleted pythonPath from their workspace settings when in `Deprecate PythonPath` experiment.
   ([#12533](https://github.com/Microsoft/vscode-python/issues/12533))
1. Changed public API for execution to return an object and provide a callback which is called when interpreter setting changes.
   ([#12596](https://github.com/Microsoft/vscode-python/issues/12596))
1. Allow users to opt out of us checking whether their notebooks can be trusted. This setting is turned off by default and must be manually enabled.
   ([#12611](https://github.com/Microsoft/vscode-python/issues/12611))
1. Include the JUPYTER_PATH environment variable when searching the disk for kernels.
   ([#12694](https://github.com/Microsoft/vscode-python/issues/12694))
1. Added exporting to python, HTML and PDF from the interactive window.
   ([#12732](https://github.com/Microsoft/vscode-python/issues/12732))
1. Show a prompt asking user to upgrade Code runner to new version to keep using it when in Deprecate PythonPath experiment.
   ([#12764](https://github.com/Microsoft/vscode-python/issues/12764))
1. Opening notebooks in the preview Notebook editor for [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/).
   ([#10496](https://github.com/Microsoft/vscode-python/issues/10496))

### Fixes

1. Ensure we only have a single isort process running on a single file.
   ([#10579](https://github.com/Microsoft/vscode-python/issues/10579))
1. Provided a method for external partners to participate in jupyter server URI picking/authentication.
   ([#10993](https://github.com/Microsoft/vscode-python/issues/10993))
1. Check for hideFromUser before activating current terminal.
   ([#11122](https://github.com/Microsoft/vscode-python/issues/11122))
1. In Markdown cells, turn HTML links to markdown links so that nteract renders them.
   ([#11254](https://github.com/Microsoft/vscode-python/issues/11254))
1. Prevent incorrect ipywidget display (double plots) due to synchronization issues.
   ([#11281](https://github.com/Microsoft/vscode-python/issues/11281))
1. Removed the Kernel Selection toolbar from the Interactive Window when using a local Jupyter Server.
   To show it again, set the setting 'Python > Data Science > Show Kernel Selection On Interactive Window'.
   ([#11347](https://github.com/Microsoft/vscode-python/issues/11347))
1. Get Jupyter connections to work with a Windows store installed Python/Jupyter combination.
   ([#11412](https://github.com/Microsoft/vscode-python/issues/11412))
1. Disable hover intellisense in the interactive window unless the code is expanded.
   ([#11459](https://github.com/Microsoft/vscode-python/issues/11459))
1. Make layout of markdown editors much faster to open.
   ([#11584](https://github.com/Microsoft/vscode-python/issues/11584))
1. Watermark in the interactive window can appear on top of entered text.
   ([#11691](https://github.com/Microsoft/vscode-python/issues/11691))
1. Jupyter can fail to run a kernel if the user's environment contains non string values.
   ([#11749](https://github.com/Microsoft/vscode-python/issues/11749))
1. On Mac meta+Z commands are performing both cell and editor undos.
   ([#11758](https://github.com/Microsoft/vscode-python/issues/11758))
1. Paste can sometimes double paste into a notebook or interactive window editor.
   ([#11796](https://github.com/Microsoft/vscode-python/issues/11796))
1. Fix jupyter connections going down when azure-storage or other extensions with node-fetch are installed.
   ([#11830](https://github.com/Microsoft/vscode-python/issues/11830))
1. Variables should not flash when running by line.
   ([#12046](https://github.com/Microsoft/vscode-python/issues/12046))
1. Discard changes on Notebooks when the user selects 'Don't Save' on the save changes dialog.
   ([#12180](https://github.com/Microsoft/vscode-python/issues/12180))
1. Disable `Extract variable & method` commands in `Notebook Cells`.
   ([#12206](https://github.com/Microsoft/vscode-python/issues/12206))
1. Disable linting in Notebook Cells.
   ([#12208](https://github.com/Microsoft/vscode-python/issues/12208))
1. Register services before extension activates.
   ([#12227](https://github.com/Microsoft/vscode-python/issues/12227))
1. Infinite loop of asking to reload the extension when enabling custom editor.
   ([#12231](https://github.com/Microsoft/vscode-python/issues/12231))
1. Fix raw kernel autostart and remove jupyter execution from interactive base.
   ([#12330](https://github.com/Microsoft/vscode-python/issues/12330))
1. If we fail to start a raw kernel daemon then fall back to using process execution.
   ([#12355](https://github.com/Microsoft/vscode-python/issues/12355))
1. Fix the export button from the interactive window to export again.
   ([#12460](https://github.com/Microsoft/vscode-python/issues/12460))
1. Process Jupyter messages synchronously when possible.
   ([#12588](https://github.com/Microsoft/vscode-python/issues/12588))
1. Open variable explorer when opening variable explorer during debugging.
   ([#12773](https://github.com/Microsoft/vscode-python/issues/12773))
1. Use the given interpreter for launching the non-daemon python
   ([#12821](https://github.com/Microsoft/vscode-python/issues/12821))
1. Correct the color of the 'Collapse All' button in the Interactive Window
   ([#12838](https://github.com/microsoft/vscode-python/issues/12838))

### Code Health

1. Move all logging to the Python output channel.
   ([#9837](https://github.com/Microsoft/vscode-python/issues/9837))
1. Add a functional test that opens both the interactive window and a notebook at the same time.
   ([#11445](https://github.com/Microsoft/vscode-python/issues/11445))
1. Added setting `python.logging.level` which carries the logging level value the extension will log at.
   ([#11699](https://github.com/Microsoft/vscode-python/issues/11699))
1. Monkeypatch `console.*` calls to the logger only in CI.
   ([#11896](https://github.com/Microsoft/vscode-python/issues/11896))
1. Replace python.dataScience.ptvsdDistPath with python.dataScience.debugpyDistPath.
   ([#11993](https://github.com/Microsoft/vscode-python/issues/11993))
1. Rename ptvsd to debugpy in Telemetry.
   ([#11996](https://github.com/Microsoft/vscode-python/issues/11996))
1. Update JSDoc annotations for many of the APIs (thanks [Anthony Shaw](https://github.com/tonybaloney))
   ([#12101](https://github.com/Microsoft/vscode-python/issues/12101))
1. Refactor `LinterId` to an enum instead of a string union.
   (thanks to [Anthony Shaw](https://github.com/tonybaloney))
   ([#12116](https://github.com/Microsoft/vscode-python/issues/12116))
1. Remove webserver used to host contents in WebViews.
   ([#12140](https://github.com/Microsoft/vscode-python/issues/12140))
1. Inline interface due to issues with custom types when using `ts-node`.
   ([#12238](https://github.com/Microsoft/vscode-python/issues/12238))
1. Fix linux nightly tests so they run and report results. Also seems to get rid of stream destroyed messages for raw kernel.
   ([#12539](https://github.com/Microsoft/vscode-python/issues/12539))
1. Log ExP experiments the user belongs to in the output panel.
   ([#12656](https://github.com/Microsoft/vscode-python/issues/12656))
1. Add more telemetry for "Select Interpreter" command.
   ([#12722](https://github.com/Microsoft/vscode-python/issues/12722))
1. Add tests for trusted notebooks.
   ([#12554](https://github.com/Microsoft/vscode-python/issues/12554))
1. Update categories in `package.json`.
   ([#12844](https://github.com/Microsoft/vscode-python/issues/12844))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.6.3 (30 June 2020)

### Fixes

1. Correctly check for ZMQ support, previously it could allow ZMQ to be supported when zmq could not be imported.
   ([#12585](https://github.com/Microsoft/vscode-python/issues/12585))
1. Auto indentation no longer working for notebooks and interactive window.
   ([#12389](https://github.com/Microsoft/vscode-python/issues/12389))
1. Add telemetry for tracking run by line.
   ([#12580](https://github.com/Microsoft/vscode-python/issues/12580))
1. Add more telemetry to distinguish how is the start page opened.
   ([#12603](https://github.com/microsoft/vscode-python/issues/12603))
1. Stop looking for mspythonconfig.json file in subfolders.
   ([#12614](https://github.com/Microsoft/vscode-python/issues/12614))

## 2020.6.2 (25 June 2020)

### Fixes

1. Fix `linting.pylintEnabled` setting check.
   ([#12285](https://github.com/Microsoft/vscode-python/issues/12285))
1. Don't modify LS settings if jediEnabled does not exist.
   ([#12429](https://github.com/Microsoft/vscode-python/issues/12429))

## 2020.6.1 (17 June 2020)

### Fixes

1. Fixed issue when `python.jediEnabled` setting was not removed and `python.languageServer` setting was not updated.
   ([#12429](https://github.com/Microsoft/vscode-python/issues/12429))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.6.0 (16 June 2020)

### Enhancements

1. Removed `python.jediEnabled` setting in favor of `python.languageServer`. Instead of `"python.jediEnabled": true` please use `"python.languageServer": "Jedi"`.
   ([#7010](https://github.com/Microsoft/vscode-python/issues/7010))
1. Added a start page for the extension. It opens to new users or when there is a new release. It can be disabled with the setting 'Python: Show Start Page'.
   ([#11057](https://github.com/Microsoft/vscode-python/issues/11057))
1. Preliminary support using other languages for the kernel.
   ([#11919](https://github.com/Microsoft/vscode-python/issues/11919))
1. Enable the use of the custom editor for native notebooks.
   ([#10744](https://github.com/Microsoft/vscode-python/issues/10744))

### Fixes

1. Ensure sorting imports in a modified file picks up the proper configuration.
   thanks [Peter Law](https://github.com/PeterJCLaw))
   ([#4891](https://github.com/Microsoft/vscode-python/issues/4891))
1. Made variable explorer (from IPython Notebook interface) resizable.
   ([#5382](https://github.com/Microsoft/vscode-python/issues/5382))
1. Add junit family to pytest runner args to remove pytest warning.
   ([#10673](https://github.com/Microsoft/vscode-python/issues/10673))
1. Switch order of restart and cancel buttons in interactive window to be consistent with ordering in notebook toolbar.
   ([#11091](https://github.com/Microsoft/vscode-python/issues/11091))
1. Support opening other URI schemes besides 'file' and 'vsls'.
   ([#11393](https://github.com/Microsoft/vscode-python/issues/11393))
1. Fix issue with formatting when the first line is blank.
   ([#11416](https://github.com/Microsoft/vscode-python/issues/11416))
1. Force interactive window to always scroll long output. Don't allow scrollbars within scrollbars.
   ([#11421](https://github.com/Microsoft/vscode-python/issues/11421))
1. Hover on notebooks or interactive window seems to stutter.
   ([#11422](https://github.com/Microsoft/vscode-python/issues/11422))
1. Make shift+tab work again in the interactive window. Escaping focus from the prompt is now relegated to 'Shift+Esc'.
   ([#11495](https://github.com/Microsoft/vscode-python/issues/11495))
1. Keep import and export working with raw kernel mode. Also allow for installing dependencies if running an import before jupyter was ever launched.
   ([#11501](https://github.com/Microsoft/vscode-python/issues/11501))
1. Extra kernels that just say "Python 3 - python" are showing up in the raw kernel kernel picker.
   ([#11552](https://github.com/Microsoft/vscode-python/issues/11552))
1. Fix intermittent launch failure with raw kernels on windows.
   ([#11574](https://github.com/Microsoft/vscode-python/issues/11574))
1. Don't register a kernelspec when switching to an interpreter in raw kernel mode.
   ([#11575](https://github.com/Microsoft/vscode-python/issues/11575))
1. Keep the notebook input prompt up if you focus out of vscode.
   ([#11581](https://github.com/Microsoft/vscode-python/issues/11581))
1. Fix install message to reference run by line instead of debugging.
   ([#11661](https://github.com/Microsoft/vscode-python/issues/11661))
1. Run by line does not scroll to the line that is being run.
   ([#11662](https://github.com/Microsoft/vscode-python/issues/11662))
1. For direct kernel connection, don't replace a notebook's metadata default kernelspec with a new kernelspec on startup.
   ([#11672](https://github.com/Microsoft/vscode-python/issues/11672))
1. Fixes issue with importing `debupy` in interactive window.
   ([#11686](https://github.com/Microsoft/vscode-python/issues/11686))
1. Reopen all notebooks when rerunning the extension (including untitled ones).
   ([#11711](https://github.com/Microsoft/vscode-python/issues/11711))
1. Make sure to clear 'outputPrepend' when rerunning cells and to also only ever add it once to a cell.
   (thanks [Barry Nolte](https://github.com/BarryNolte))
   ([#11726](https://github.com/Microsoft/vscode-python/issues/11726))
1. Disable pre-warming of Kernel Daemons when user does not belong to the `LocalZMQKernel - experiment` experiment.
   ([#11751](https://github.com/Microsoft/vscode-python/issues/11751))
1. When switching to an invalid kernel (one that is registered but cannot start) in raw mode respect the launch timeout that is passed in.
   ([#11752](https://github.com/Microsoft/vscode-python/issues/11752))
1. Make `python.dataScience.textOutputLimit` apply on subsequent rerun. We were letting the 'outputPrepend' metadata persist from run to run.
   (thanks [Barry Nolte](https://github.com/BarryNolte))
   ([#11777](https://github.com/Microsoft/vscode-python/issues/11777))
1. Use `${command:python.interpreterPath}` to get selected interpreter path in `launch.json` and `tasks.json`.
   ([#11789](https://github.com/Microsoft/vscode-python/issues/11789))
1. Restarting a kernel messes up run by line.
   ([#11793](https://github.com/Microsoft/vscode-python/issues/11793))
1. Correctly show kernel status in raw kernel mode.
   ([#11797](https://github.com/Microsoft/vscode-python/issues/11797))
1. Hovering over variables in a python file can show two hover values if the interactive window is closed and reopened.
   ([#11800](https://github.com/Microsoft/vscode-python/issues/11800))
1. Make sure to use webView.cspSource for all csp sources.
   ([#11855](https://github.com/Microsoft/vscode-python/issues/11855))
1. Use command line arguments to launch our raw kernels as opposed to a connection file. The connection file seems to be causing issues in particular on windows CI machines with permissions.
   ([#11883](https://github.com/Microsoft/vscode-python/issues/11883))
1. Improve our status reporting when launching and connecting to a raw kernel.
   ([#11951](https://github.com/Microsoft/vscode-python/issues/11951))
1. Prewarm raw kernels based on raw kernel support and don't prewarm if jupyter autostart is disabled.
   ([#11956](https://github.com/Microsoft/vscode-python/issues/11956))
1. Don't flood the hard drive when typing in a large notebook file.
   ([#12058](https://github.com/Microsoft/vscode-python/issues/12058))
1. Disable run-by-line and continue buttons in run by line mode when running.
   ([#12169](https://github.com/Microsoft/vscode-python/issues/12169))
1. Disable `Sort Imports` command in `Notebook Cells`.
   ([#12193](https://github.com/Microsoft/vscode-python/issues/12193))
1. Fix debugger continue event to actually change a cell.
   ([#12155](https://github.com/Microsoft/vscode-python/issues/12155))
1. Make Jedi the Default value for the python.languageServer setting.
   ([#12225](https://github.com/Microsoft/vscode-python/issues/12225))
1. Make stop during run by line interrupt the kernel.
   ([#12249](https://github.com/Microsoft/vscode-python/issues/12249))
1. Have raw kernel respect the jupyter server disable auto start setting.
   ([#12246](https://github.com/Microsoft/vscode-python/issues/12246))

### Code Health

1. Use ts-loader as a tyepscript loader in webpack.
   ([#9061](https://github.com/Microsoft/vscode-python/issues/9061))
1. Fixed typo from unitest -> unittest.
   (thanks [Rameez Khan](https://github.com/Rxmeez)).
   ([#10919](https://github.com/Microsoft/vscode-python/issues/10919))
1. Make functional tests more deterministic.
   ([#11058](https://github.com/Microsoft/vscode-python/issues/11058))
1. Reenable CDN unit tests.
   ([#11442](https://github.com/Microsoft/vscode-python/issues/11442))
1. Run by line for notebook cells minimal implementation.
   ([#11607](https://github.com/Microsoft/vscode-python/issues/11607))
1. Get shape and count when showing debugger variables.
   ([#11657](https://github.com/Microsoft/vscode-python/issues/11657))
1. Add more tests to verify data frames can be opened.
   ([#11658](https://github.com/Microsoft/vscode-python/issues/11658))
1. Support data tips overtop of python files that have had cells run.
   ([#11659](https://github.com/Microsoft/vscode-python/issues/11659))
1. Functional test for run by line functionality.
   ([#11660](https://github.com/Microsoft/vscode-python/issues/11660))
1. Fixed typo in a test from lanaguage -> language.
   (thanks [Ashwin Ramaswami](https://github.com/epicfaace)).
   ([#11775](https://github.com/Microsoft/vscode-python/issues/11775))
1. Add bitness information to interpreter telemetry.
   ([#11904](https://github.com/Microsoft/vscode-python/issues/11904))
1. Fix failing linux debugger tests.
   ([#11935](https://github.com/Microsoft/vscode-python/issues/11935))
1. Faster unit tests on CI Pipeline.
   ([#12017](https://github.com/Microsoft/vscode-python/issues/12017))
1. Ensure we can use proposed VS Code API with `ts-node`.
   ([#12025](https://github.com/Microsoft/vscode-python/issues/12025))
1. Faster node unit tests on Azure pipeline.
   ([#12027](https://github.com/Microsoft/vscode-python/issues/12027))
1. Use [deemon](https://www.npmjs.com/package/deemon) package for background compilation with support for restarting VS Code during development.
   ([#12059](https://github.com/Microsoft/vscode-python/issues/12059))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.5.3 (10 June 2020)

1. Update `debugpy` to use `1.0.0b11` or greater.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.5.2 (8 June 2020)

### Fixes

1. Double-check for interpreters when running diagnostics before displaying the "Python is not installed" message.
   ([#11870](https://github.com/Microsoft/vscode-python/issues/11870))
1. Ensure user cannot belong to all experiments in an experiment group.
   ([#11943](https://github.com/Microsoft/vscode-python/issues/11943))
1. Ensure extension features are started when in `Deprecate PythonPath` experiment and opening a file without any folder opened.
   ([#12177](https://github.com/Microsoft/vscode-python/issues/12177))

### Code Health

1. Integrate VS Code experiment framework in the extension.
   ([#10790](https://github.com/Microsoft/vscode-python/issues/10790))
1. Update telemetry on errors and exceptions to use [vscode-extension-telemetry](https://www.npmjs.com/package/vscode-extension-telemetry).
   ([#11597](https://github.com/Microsoft/vscode-python/issues/11597))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.5.1 (19 May 2020)

### Fixes

1. Do not execute shebang as an interpreter until user has clicked on the codelens enclosing the shebang.
   ([#11687](https://github.com/Microsoft/vscode-python/issues/11687))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.5.0 (12 May 2020)

### Enhancements

1. Added ability to manually enter a path to interpreter in the select interpreter dropdown.
   ([#216](https://github.com/Microsoft/vscode-python/issues/216))
1. Add status bar item with icon when installing Insiders/Stable build.
   (thanks to [ErwanDL](https://github.com/ErwanDL/))
   ([#10495](https://github.com/Microsoft/vscode-python/issues/10495))
1. Support for language servers that don't allow incremental document updates inside of notebooks and the interactive window.
   ([#10818](https://github.com/Microsoft/vscode-python/issues/10818))
1. Add telemetry for "Python is not installed" prompt.
   ([#10885](https://github.com/Microsoft/vscode-python/issues/10885))
1. Add basic liveshare support for raw kernels.
   ([#10988](https://github.com/Microsoft/vscode-python/issues/10988))
1. Do a one-off transfer of existing values for `python.pythonPath` setting to new Interpreter storage if in DeprecatePythonPath experiment.
   ([#11052](https://github.com/Microsoft/vscode-python/issues/11052))
1. Ensure the language server can query pythonPath when in the Deprecate PythonPath experiment.
   ([#11083](https://github.com/Microsoft/vscode-python/issues/11083))
1. Added prompt asking users to delete `python.pythonPath` key from their workspace settings when in Deprecate PythonPath experiment.
   ([#11108](https://github.com/Microsoft/vscode-python/issues/11108))
1. Added `getDebuggerPackagePath` extension API to get the debugger package path.
   ([#11236](https://github.com/Microsoft/vscode-python/issues/11236))
1. Expose currently selected interpreter path using API.
   ([#11294](https://github.com/Microsoft/vscode-python/issues/11294))
1. Show a prompt asking user to upgrade Code runner to new version to keep using it when in Deprecate PythonPath experiment.
   ([#11327](https://github.com/Microsoft/vscode-python/issues/11327))
1. Rename string `${config:python.pythonPath}` which is used in `launch.json` to refer to interpreter path set in settings, to `${config:python.interpreterPath}`.
   ([#11446](https://github.com/Microsoft/vscode-python/issues/11446))

### Fixes

1. Added 'Enable Scrolling For Cell Outputs' setting. Works together with the 'Max Output Size' setting.
   ([#9801](https://github.com/Microsoft/vscode-python/issues/9801))
1. Fix ctrl+enter on markdown cells. Now they render.
   ([#10006](https://github.com/Microsoft/vscode-python/issues/10006))
1. Cancelling the prompt to restart the kernel should not leave the toolbar buttons disabled.
   ([#10356](https://github.com/Microsoft/vscode-python/issues/10356))
1. Getting environment variables of activated environments should ignore the setting `python.terminal.activateEnvironment`.
   ([#10370](https://github.com/Microsoft/vscode-python/issues/10370))
1. Show notebook path when listing remote kernels.
   ([#10521](https://github.com/Microsoft/vscode-python/issues/10521))
1. Allow filtering on '0' for the Data Viewer.
   ([#10552](https://github.com/Microsoft/vscode-python/issues/10552))
1. Allow interrupting the kernel more than once.
   ([#10587](https://github.com/Microsoft/vscode-python/issues/10587))
1. Make error links in exception tracebacks support multiple cells in the stack and extra spaces.
   ([#10708](https://github.com/Microsoft/vscode-python/issues/10708))
1. Add channel property onto returned ZMQ messages.
   ([#10785](https://github.com/Microsoft/vscode-python/issues/10785))
1. Fix problem with shape not being computed for some types in the variable explorer.
   ([#10825](https://github.com/Microsoft/vscode-python/issues/10825))
1. Enable cell related commands when a Python file is already open.
   ([#10884](https://github.com/Microsoft/vscode-python/issues/10884))
1. Fix issue with parsing long conda environment names.
   ([#10942](https://github.com/Microsoft/vscode-python/issues/10942))
1. Hide progress indicator once `Interactive Window` has loaded.
   ([#11065](https://github.com/Microsoft/vscode-python/issues/11065))
1. Do not perform pipenv interpreter discovery on extension activation.
   Fix for [CVE-2020-1171](https://portal.msrc.microsoft.com/en-us/security-guidance/advisory/CVE-2020-1171).
   ([#11127](https://github.com/Microsoft/vscode-python/issues/11127))
1. Ensure arguments are included in log messages when using decorators.
   ([#11153](https://github.com/Microsoft/vscode-python/issues/11153))
1. Fix for opening the interactive window when no workspace is open.
   ([#11291](https://github.com/Microsoft/vscode-python/issues/11291))
1. Conda environments working with raw kernels.
   ([#11306](https://github.com/Microsoft/vscode-python/issues/11306))
1. Ensure isolate script is passed as command argument when installing modules.
   ([#11399](https://github.com/Microsoft/vscode-python/issues/11399))
1. Make raw kernel launch respect launched resource environment.
   ([#11451](https://github.com/Microsoft/vscode-python/issues/11451))
1. When using a kernelspec without a fully qualified python path make sure we use the resource to get the active interpreter.
   ([#11469](https://github.com/Microsoft/vscode-python/issues/11469))
1. For direct kernel launch correctly detect if interpreter has changed since last launch.
   ([#11530](https://github.com/Microsoft/vscode-python/issues/11530))
1. Performance improvements when executing multiple cells in `Notebook` and `Interactive Window`.
   ([#11576](https://github.com/Microsoft/vscode-python/issues/11576))
1. Ensure kernel daemons are disposed correctly when closing notebooks.
   ([#11579](https://github.com/Microsoft/vscode-python/issues/11579))
1. When VS quits, make sure to save contents of notebook for next reopen.
   ([#11557](https://github.com/Microsoft/vscode-python/issues/11557))
1. Fix scrolling when clicking in the interactive window to not jump around.
   ([#11554](https://github.com/Microsoft/vscode-python/issues/11554))
1. Setting "Data Science: Run Startup Commands" is now limited to being a user setting.
   Fix for [CVE-2020-1192](https://portal.msrc.microsoft.com/en-us/security-guidance/advisory/CVE-2020-1192).

### Code Health

1. Enable the `Self Cert` tests for Notebooks.
   ([#10447](https://github.com/Microsoft/vscode-python/issues/10447))
1. Remove deprecated telemetry and old way of searching for `Jupyter`.
   ([#10809](https://github.com/Microsoft/vscode-python/issues/10809))
1. Add telemetry for pipenv interpreter discovery.
   ([#11128](https://github.com/Microsoft/vscode-python/issues/11128))
1. Update to the latest version of [`jedi`](https://github.com/davidhalter/jedi) (`0.17`). Note that this may be the last version of Jedi to support Python 2 and Python 3.5. (#11221; thanks Peter Law)
   ([#11221](https://github.com/Microsoft/vscode-python/issues/11221))
1. Lazy load types from `jupyterlab/services` and similar `npm modules`.
   ([#11297](https://github.com/Microsoft/vscode-python/issues/11297))
1. Remove IJMPConnection implementation while maintaining tests written for it.
   ([#11470](https://github.com/Microsoft/vscode-python/issues/11470))
1. Implement an IJupyterVariables provider for the debugger.
   ([#11542](https://github.com/Microsoft/vscode-python/issues/11542))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.4.1 (27 April 2020)

### Fixes

1. Use node FS APIs when searching for python. This is a temporary change until VSC FS APIs are fixed.
   ([#10850](https://github.com/Microsoft/vscode-python/issues/10850))
1. Show unhandled widget messages in the jupyter output window.
   ([#11239](https://github.com/Microsoft/vscode-python/issues/11239))
1. Warn when using a version of the widget `qgrid` greater than `1.1.1` with the recommendation to downgrade to `1.1.1`.
   ([#11245](https://github.com/Microsoft/vscode-python/issues/11245))
1. Allow user modules import when discovering tests.
   ([#11264](https://github.com/Microsoft/vscode-python/issues/11264))
1. Fix issue where downloading ipywidgets from the CDN might be busy.
   ([#11274](https://github.com/Microsoft/vscode-python/issues/11274))
1. Error: Timeout is shown after running any widget more than once.
   ([#11334](https://github.com/Microsoft/vscode-python/issues/11334))
1. Change "python.dataScience.runStartupCommands" commands to be a global setting, not a workspace setting.
   ([#11352](https://github.com/Microsoft/vscode-python/issues/11352))
1. Closing the interactive window shuts down other active notebook sessions.
   ([#11404](https://github.com/Microsoft/vscode-python/issues/11404))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.4.0 (20 April 2020)

### Enhancements

1. Add support for `ipywidgets`.
   ([#3429](https://github.com/Microsoft/vscode-python/issues/3429))
1. Support output and interact ipywidgets.
   ([#9524](https://github.com/Microsoft/vscode-python/issues/9524))
1. Support using 'esc' or 'ctrl+u' to clear the contents of the interactive window input box.
   ([#10198](https://github.com/Microsoft/vscode-python/issues/10198))
1. Use new interpreter storage supporting multiroot workspaces when in Deprecate PythonPath experiment.
   ([#10325](https://github.com/Microsoft/vscode-python/issues/10325))
1. Modified `Select interpreter` command to support setting interpreter at workspace level.
   ([#10372](https://github.com/Microsoft/vscode-python/issues/10372))
1. Added a command `Clear Workspace Interpreter Setting` to clear value of Python interpreter from workspace settings.
   ([#10374](https://github.com/Microsoft/vscode-python/issues/10374))
1. Support reverse connection ("listen" in launch.json) from debug adapter to VSCode.
   ([#10437](https://github.com/Microsoft/vscode-python/issues/10437))
1. Use specific icons when downloading MPLS and Insiders instead of the spinner.
   ([#10495](https://github.com/Microsoft/vscode-python/issues/10495))
1. Notebook metadata is now initialized in alphabetical order.
   ([#10571](https://github.com/Microsoft/vscode-python/issues/10571))
1. Added command translations for Hindi Language.
   (thanks [Pai026](https://github.com/Pai026/))
   ([#10711](https://github.com/Microsoft/vscode-python/issues/10711))
1. Prompt when an "untrusted" workspace Python environment is to be auto selected when in Deprecate PythonPath experiment.
   ([#10879](https://github.com/Microsoft/vscode-python/issues/10879))
1. Added a command `Reset stored info for untrusted Interpreters` to reset "untrusted" interpreters storage when in Deprecate PythonPath experiment.
   ([#10912](https://github.com/Microsoft/vscode-python/issues/10912))
1. Added a user setting `python.defaultInterpreterPath` to set up the default interpreter path when in Deprecate PythonPath experiment.
   ([#11021](https://github.com/Microsoft/vscode-python/issues/11021))
1. Hide "untrusted" interpreters from 'Select interpreter' dropdown list when in DeprecatePythonPath Experiment.
   ([#11046](https://github.com/Microsoft/vscode-python/issues/11046))
1. Make spacing of icons on notebook toolbars match spacing on other VS code toolbars.
   ([#10464](https://github.com/Microsoft/vscode-python/issues/10464))
1. Make jupyter server status centered in the UI and use the same font as the rest of VS code.
   ([#10465](https://github.com/Microsoft/vscode-python/issues/10465))
1. Performa validation of interpreter only when a Notebook is opened instead of when extension activates.
   ([#10893](https://github.com/Microsoft/vscode-python/issues/10893))
1. Scrolling in cells doesn't happen on new line.
   ([#10952](https://github.com/Microsoft/vscode-python/issues/10952))
1. Ensure images in workspace folder are supported within markdown cells in a `Notebook`.
   ([#11040](https://github.com/Microsoft/vscode-python/issues/11040))
1. Make sure ipywidgets have a white background so they display in dark themes.
   ([#11060](https://github.com/Microsoft/vscode-python/issues/11060))
1. Arrowing down through cells put the cursor in the wrong spot.
   ([#11094](https://github.com/Microsoft/vscode-python/issues/11094))

### Fixes

1. Ensure plot fits within the page of the `PDF`.
   ([#9403](https://github.com/Microsoft/vscode-python/issues/9403))
1. Fix typing in output of cells to not delete or modify any cells.
   ([#9519](https://github.com/Microsoft/vscode-python/issues/9519))
1. Show an error when ipywidgets cannot be found.
   ([#9523](https://github.com/Microsoft/vscode-python/issues/9523))
1. Experiments no longer block on telemetry.
   ([#10008](https://github.com/Microsoft/vscode-python/issues/10008))
1. Fix interactive window debugging after running cells in a notebook.
   ([#10206](https://github.com/Microsoft/vscode-python/issues/10206))
1. Fix problem with Data Viewer not working when builtin functions are overridden (like max).
   ([#10280](https://github.com/Microsoft/vscode-python/issues/10280))
1. Fix interactive window debugging when debugging the first cell to be run.
   ([#10395](https://github.com/Microsoft/vscode-python/issues/10395))
1. Fix interactive window debugging for extra lines in a function.
   ([#10396](https://github.com/Microsoft/vscode-python/issues/10396))
1. Notebook metadata is now initialized in the correct place.
   ([#10544](https://github.com/Microsoft/vscode-python/issues/10544))
1. Fix save button not working on notebooks.
   ([#10647](https://github.com/Microsoft/vscode-python/issues/10647))
1. Fix toolbars on 3rd party widgets to show correct icons.
   ([#10734](https://github.com/Microsoft/vscode-python/issues/10734))
1. Clicking or double clicking in output of a cell selects or gives focus to a cell. It should only affect the controls in the output.
   ([#10749](https://github.com/Microsoft/vscode-python/issues/10749))
1. Fix for notebooks not becoming dirty when changing a kernel.
   ([#10795](https://github.com/Microsoft/vscode-python/issues/10795))
1. Auto save for focusChange is not respected when switching to non text documents. Menu focus will still not cause a save (no callback from VS code for this), but should work for switching to other apps and non text documents.
   ([#10853](https://github.com/Microsoft/vscode-python/issues/10853))
1. Handle display.update inside of cells.
   ([#10873](https://github.com/Microsoft/vscode-python/issues/10873))
1. ZMQ should not cause local server to fail.
   ([#10877](https://github.com/Microsoft/vscode-python/issues/10877))
1. Fixes issue with spaces in debugger paths when using `getRemoteLauncherCommand`.
   ([#10905](https://github.com/Microsoft/vscode-python/issues/10905))
1. Fix output and interact widgets to work again.
   ([#10915](https://github.com/Microsoft/vscode-python/issues/10915))
1. Make sure the same python is used for the data viewer as the notebook so that pandas can be found.
   ([#10926](https://github.com/Microsoft/vscode-python/issues/10926))
1. Ensure user code in cell is preserved between cell execution and cell edits.
   ([#10949](https://github.com/Microsoft/vscode-python/issues/10949))
1. Make sure the interpreter in the notebook matches the kernel.
   ([#10953](https://github.com/Microsoft/vscode-python/issues/10953))
1. Jupyter notebooks and interactive window crashing on startup.
   ([#11035](https://github.com/Microsoft/vscode-python/issues/11035))
1. Fix perf problems after running the interactive window for an extended period of time.
   ([#10971](https://github.com/Microsoft/vscode-python/issues/10971))
1. Fix problem with opening a notebook in jupyter after saving in VS code.
   ([#11151](https://github.com/Microsoft/vscode-python/issues/11151))
1. Fix CTRL+Z and Z for undo on notebooks.
   ([#11160](https://github.com/Microsoft/vscode-python/issues/11160))
1. Fix saving to PDF for viewed plots.
   ([#11157](https://github.com/Microsoft/vscode-python/issues/11157))
1. Fix scrolling in a notebook whenever resizing or opening.
   ([#11238](https://github.com/Microsoft/vscode-python/issues/11238))

### Code Health

1. Add conda environments to nightly test runs.
   ([#10134](https://github.com/Microsoft/vscode-python/issues/10134))
1. Refactor the extension activation code to split on phases.
   ([#10454](https://github.com/Microsoft/vscode-python/issues/10454))
1. Added a kernel launcher to spawn python kernels without Jupyter.
   ([#10479](https://github.com/Microsoft/vscode-python/issues/10479))
1. Add ZMQ library to extension.
   ([#10483](https://github.com/Microsoft/vscode-python/issues/10483))
1. Added test harness for `ipywidgets` in `notebooks`.
   ([#10655](https://github.com/Microsoft/vscode-python/issues/10655))
1. Run internal modules and scripts in isolated manner.
   This helps avoid problems like shadowing stdlib modules.
   ([#10681](https://github.com/Microsoft/vscode-python/issues/10681))
1. Add telemetry for .env files.
   ([#10780](https://github.com/Microsoft/vscode-python/issues/10780))
1. Update prettier to latest version.
   ([#10837](https://github.com/Microsoft/vscode-python/issues/10837))
1. Update typescript to `3.8`.
   ([#10839](https://github.com/Microsoft/vscode-python/issues/10839))
1. Add telemetry around ipywidgets usage, failures, and overhead.
   ([#11027](https://github.com/Microsoft/vscode-python/issues/11027))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.3.2 (2 April 2020)

### Fixes

1. Update `debugpy` to latest (v1.0.0b5). Fixes issue with connections with multi-process.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.3.1 (31 March 2020)

### Fixes

1. Update `debugpy` to latest (v1.0.0b4). Fixes issue with locale.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.3.0 (19 March 2020)

### Enhancements

1. Make interactive window wrap like the notebook editor does.
   ([#4466](https://github.com/Microsoft/vscode-python/issues/4466))
1. Support scrolling beyond the last line in the notebook editor and the interactive window. Uses the `editor.scrollBeyondLastLine` setting.
   ([#7892](https://github.com/Microsoft/vscode-python/issues/7892))
1. Allow user to override the arguments passed to Jupyter on startup. To change the arguments, run the 'Python: Specify Jupyter command line arguments" command.
   ([#8698](https://github.com/Microsoft/vscode-python/issues/8698))
1. When entering remote Jupyter Server, default the input value to uri in clipboard.
   ([#9163](https://github.com/Microsoft/vscode-python/issues/9163))
1. Added a command to allow users to select a kernel for a `Notebook`.
   ([#9228](https://github.com/Microsoft/vscode-python/issues/9228))
1. When saving new `notebooks`, default to the current workspace folder.
   ([#9331](https://github.com/Microsoft/vscode-python/issues/9331))
1. When the output of a cell gets trimmed for the first time, the user will be informed of it and which setting changes it.
   ([#9401](https://github.com/Microsoft/vscode-python/issues/9401))
1. Change the parameters for when a Data Science survey prompt comes up. After opening 5 notebooks (ever) or running 100 cells (ever).
   ([#10186](https://github.com/Microsoft/vscode-python/issues/10186))
1. Show quickfixes for launch.json.
   ([#10245](https://github.com/Microsoft/vscode-python/issues/10245))

### Fixes

1. Jupyter autocompletion will only show magic commands on empty lines, preventing them of appearing in functions.
   ([#10023](https://github.com/Microsoft/vscode-python/issues/10023))
1. Remove extra lines at the end of the file when formatting with Black.
   ([#1877](https://github.com/Microsoft/vscode-python/issues/1877))
1. Capitalize `Activate.ps1` in code for PowerShell Core on Linux.
   ([#2607](https://github.com/Microsoft/vscode-python/issues/2607))
1. Change interactive window to use the python interpreter associated with the file being run.
   ([#3123](https://github.com/Microsoft/vscode-python/issues/3123))
1. Make line numbers in errors for the Interactive window match the original file and make them clickable for jumping back to an error location.
   ([#6370](https://github.com/Microsoft/vscode-python/issues/6370))
1. Fix magic commands that return 'paged' output.
   ([#6900](https://github.com/Microsoft/vscode-python/issues/6900))
1. Ensure model is updated with user changes after user types into the editor.
   ([#8589](https://github.com/Microsoft/vscode-python/issues/8589))
1. Fix latex output from a code cell to render correctly.
   ([#8742](https://github.com/Microsoft/vscode-python/issues/8742))
1. Toggling cell type from `code` to `markdown` will not set focus to the editor in cells of a `Notebook`.
   ([#9102](https://github.com/Microsoft/vscode-python/issues/9102))
1. Remove whitespace from code before pushing to the interactive window.
   ([#9116](https://github.com/Microsoft/vscode-python/issues/9116))
1. Have sys info show that we have connected to an existing server.
   ([#9132](https://github.com/Microsoft/vscode-python/issues/9132))
1. Fix IPython.clear_output to behave like Jupyter.
   ([#9174](https://github.com/Microsoft/vscode-python/issues/9174))
1. Jupyter output tab was not showing anything when connecting to a remote server.
   ([#9177](https://github.com/Microsoft/vscode-python/issues/9177))
1. Fixed our css generation from custom color themes which caused the Data Viewer to not load.
   ([#9242](https://github.com/Microsoft/vscode-python/issues/9242))
1. Allow a user to skip switching to a kernel if the kernel dies during startup.
   ([#9250](https://github.com/Microsoft/vscode-python/issues/9250))
1. Clean up interative window styling and set focus to input box if clicking in the interactive window.
   ([#9282](https://github.com/Microsoft/vscode-python/issues/9282))
1. Change icon spacing to match vscode icon spacing in native editor toolbars and interactive window toolbar.
   ([#9283](https://github.com/Microsoft/vscode-python/issues/9283))
1. Display diff viewer for `ipynb` files without opening `Notebooks`.
   ([#9395](https://github.com/Microsoft/vscode-python/issues/9395))
1. Python environments will not be activated in terminals hidden from the user.
   ([#9503](https://github.com/Microsoft/vscode-python/issues/9503))
1. Disable `Restart Kernel` and `Interrupt Kernel` buttons when a `kernel` has not yet started.
   ([#9731](https://github.com/Microsoft/vscode-python/issues/9731))
1. Fixed an issue with multiple latex formulas in the same '\$\$' block.
   ([#9766](https://github.com/Microsoft/vscode-python/issues/9766))
1. Make notebook editor and interactive window honor undocumented editor.scrollbar.verticalScrollbarSize option + increase default to match vscode.
   ([#9803](https://github.com/Microsoft/vscode-python/issues/9803))
1. Ensure that invalid kernels don't hang notebook startup or running.
   ([#9845](https://github.com/Microsoft/vscode-python/issues/9845))
1. Switching kernels should disable the run/interrupt/restart buttons.
   ([#9935](https://github.com/Microsoft/vscode-python/issues/9935))
1. Prompt to install `pandas` if not found when opening the `Data Viewer`.
   ([#9944](https://github.com/Microsoft/vscode-python/issues/9944))
1. Prompt to reload VS Code when changing the Jupyter Server connection.
   ([#9945](https://github.com/Microsoft/vscode-python/issues/9945))
1. Support opening spark dataframes in the data viewer.
   ([#9959](https://github.com/Microsoft/vscode-python/issues/9959))
1. Make sure metadata in a cell survives execution.
   ([#9997](https://github.com/Microsoft/vscode-python/issues/9997))
1. Fix run all cells to force each cell to finish before running the next one.
   ([#10016](https://github.com/Microsoft/vscode-python/issues/10016))
1. Fix interrupts from always thinking a restart occurred.
   ([#10050](https://github.com/Microsoft/vscode-python/issues/10050))
1. Do not delay activation of extension by waiting for terminal to get activated.
   ([#10094](https://github.com/Microsoft/vscode-python/issues/10094))
1. LiveShare can prevent the jupyter server from starting if it crashes.
   ([#10097](https://github.com/Microsoft/vscode-python/issues/10097))
1. Mark `poetry.lock` file as toml syntax.
   (thanks to [remcohaszing](https://github.com/remcohaszing/))
   ([#10111](https://github.com/Microsoft/vscode-python/issues/10111))
1. Hide input in `Interactive Window` based on the setting `allowInput`.
   ([#10124](https://github.com/Microsoft/vscode-python/issues/10124))
1. Fix scrolling for output to consistently scroll even during execution.
   ([#10137](https://github.com/Microsoft/vscode-python/issues/10137))
1. Correct image backgrounds for notebook editor.
   ([#10154](https://github.com/Microsoft/vscode-python/issues/10154))
1. Fix empty variables to show an empty string in the Notebook/Interactive Window variable explorer.
   ([#10204](https://github.com/Microsoft/vscode-python/issues/10204))
1. In addition to updating current working directory also add on our notebook file path to sys.path to match Jupyter.
   ([#10227](https://github.com/Microsoft/vscode-python/issues/10227))
1. Ensure message (about trimmed output) displayed in an output cell looks like a link.
   ([#10231](https://github.com/Microsoft/vscode-python/issues/10231))
1. Users can opt into or opt out of experiments in remote scenarios.
   ([#10232](https://github.com/Microsoft/vscode-python/issues/10232))
1. Ensure to correctly return env variables of the activated interpreter, when dealing with non-workspace interpreters.
   ([#10250](https://github.com/Microsoft/vscode-python/issues/10250))
1. Update kernel environments before each run to use the latest environment. Only do this for kernel specs created by the python extension.
   ([#10255](https://github.com/Microsoft/vscode-python/issues/10255))
1. Don't start up and shutdown an extra Jupyter notebook on server startup.
   ([#10311](https://github.com/Microsoft/vscode-python/issues/10311))
1. When you install missing dependencies for Jupyter successfully in an active interpreter also set that interpreter as the Jupyter selected interpreter.
   ([#10359](https://github.com/Microsoft/vscode-python/issues/10359))
1. Ensure default `host` is not set, if `connect` or `listen` settings are available.
   ([#10597](https://github.com/Microsoft/vscode-python/issues/10597))

### Code Health

1. Use the new VS Code filesystem API as much as possible.
   ([#6911](https://github.com/Microsoft/vscode-python/issues/6911))
1. Functional tests using real jupyter can take 30-90 seconds each. Most of this time is searching for interpreters. Cache the interpreter search.
   ([#7997](https://github.com/Microsoft/vscode-python/issues/7997))
1. Use Python 3.8 in tests run on Azure DevOps.
   ([#8298](https://github.com/Microsoft/vscode-python/issues/8298))
1. Display `Commands` related to `Interactive Window` and `Notebooks` only when necessary.
   ([#8869](https://github.com/Microsoft/vscode-python/issues/8869))
1. Change cursor styles of buttons `pointer` in `Interactive Window` and `Native Editor`.
   ([#9341](https://github.com/Microsoft/vscode-python/issues/9341))
1. Update Jedi to 0.16.0.
   ([#9765](https://github.com/Microsoft/vscode-python/issues/9765))
1. Update version of `VSCode` in `package.json` to `1.42`.
   ([#10046](https://github.com/Microsoft/vscode-python/issues/10046))
1. Capture `mimetypes` of cell outputs.
   ([#10182](https://github.com/Microsoft/vscode-python/issues/10182))
1. Use debugpy in the core extension instead of ptvsd.
   ([#10184](https://github.com/Microsoft/vscode-python/issues/10184))
1. Add telemetry for imports in notebooks.
   ([#10209](https://github.com/Microsoft/vscode-python/issues/10209))
1. Update data science component to use `debugpy`.
   ([#10211](https://github.com/Microsoft/vscode-python/issues/10211))
1. Use new MacOS VM in Pipelines.
   ([#10288](https://github.com/Microsoft/vscode-python/issues/10288))
1. Split the windows PR tests into two sections so they do not time out.
   ([#10293](https://github.com/Microsoft/vscode-python/issues/10293))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [debugpy](https://pypi.org/project/debugpy/)
-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.2.3 (21 February 2020)

### Fixes

1. Ensure to correctly return env variables of the activated interpreter, when dealing with non-workspace interpreters.
   ([#10250](https://github.com/Microsoft/vscode-python/issues/10250))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.2.2 (19 February 2020)

### Fixes

1. Improve error messaging when the jupyter notebook cannot be started.
   ([#9904](https://github.com/Microsoft/vscode-python/issues/9904))
1. Clear variables in notebooks and interactive-window when restarting.
   ([#9991](https://github.com/Microsoft/vscode-python/issues/9991))
1. Re-install `Jupyter` instead of installing `kernelspec` if `kernelspec` cannot be found in the python environment.
   ([#10071](https://github.com/Microsoft/vscode-python/issues/10071))
1. Fixes problem with showing ndarrays in the data viewer.
   ([#10074](https://github.com/Microsoft/vscode-python/issues/10074))
1. Fix data viewer not opening on certain data frames.
   ([#10075](https://github.com/Microsoft/vscode-python/issues/10075))
1. Fix svg mimetype so it shows up correctly in richest mimetype order.
   ([#10168](https://github.com/Microsoft/vscode-python/issues/10168))
1. Perf improvements to executing startup code for `Data Science` features when extension loads.
   ([#10170](https://github.com/Microsoft/vscode-python/issues/10170))

### Code Health

1. Add telemetry to track notebook languages
   ([#9819](https://github.com/Microsoft/vscode-python/issues/9819))
1. Telemetry around kernels not working and installs not working.
   ([#9883](https://github.com/Microsoft/vscode-python/issues/9883))
1. Change select kernel telemetry to track duration till quick pick appears.
   ([#10049](https://github.com/Microsoft/vscode-python/issues/10049))
1. Track cold/warm times to execute notebook cells.
   ([#10176](https://github.com/Microsoft/vscode-python/issues/10176))
1. Telemetry to capture connections to `localhost` using the connect to remote Jupyter server feature.
   ([#10098](https://github.com/Microsoft/vscode-python/issues/10098))
1. Telemetry to capture perceived startup times of Jupyter and time to execute a cell.
   ([#10212](https://github.com/Microsoft/vscode-python/issues/10212))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.2.1 (12 February 2020)

### Fixes

1. Re-install `Jupyter` instead of installing `kernelspec` if `kernelspec` cannot be found in the python environment.
   ([#10071](https://github.com/Microsoft/vscode-python/issues/10071))
1. Fix zh-tw localization file loading issue.
   (thanks to [ChenKB91](https://github.com/ChenKB91/))
   ([#10072](https://github.com/Microsoft/vscode-python/issues/10072))

### Note

1. Please only set the `python.languageServer` setting if you want to turn IntelliSense off. To switch between language servers, please keep using the `python.jediEnabled` setting for now.

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.2.0 (11 February 2020)

### Enhancements

1. Support opting in and out of an experiment group.
   ([#6816](https://github.com/Microsoft/vscode-python/issues/6816))
1. Add `python.languageServer` setting with values of `Jedi` (acts same as `jediEnabled`),
   `Microsoft` for the Microsoft Python Language Server and `None`, which suppresses
   editor support in the extension so neither Jedi nor Microsoft Python Language Server
   start. `None` is useful for those users who prefer using other extensions for the
   editor functionality.
   ([#7010](https://github.com/Microsoft/vscode-python/issues/7010))
1. Automatically start the Jupyter server when opening a notebook or the interative window, or when either of those has happened in the last 7 days. This behavior can be disabled with the 'python.dataScience.disableJupyterAutoStart' setting.
   ([#7232](https://github.com/Microsoft/vscode-python/issues/7232))
1. Add support for rendering local images within markdown cells in the `Notebook Editor`.
   ([#7704](https://github.com/Microsoft/vscode-python/issues/7704))
1. Add progress indicator for starting of jupyter with details of each stage.
   ([#7868](https://github.com/Microsoft/vscode-python/issues/7868))
1. Use a dedicated Python Interpreter for starting `Jupyter Notebook Server`.
   This can be changed using the command `Select Interpreter to start Jupyter server` from the `Command Palette`.
   ([#8623](https://github.com/Microsoft/vscode-python/issues/8623))
1. Implement pid quick pick for attach cases with the new debug adapter.
   ([#8701](https://github.com/Microsoft/vscode-python/issues/8701))
1. Provide attach to pid configuration via picker.
   ([#8702](https://github.com/Microsoft/vscode-python/issues/8702))
1. Support for custom python debug adapter.
   ([#8720](https://github.com/Microsoft/vscode-python/issues/8720))
1. Remove insiders re-enroll prompt.
   ([#8775](https://github.com/Microsoft/vscode-python/issues/8775))
1. Attach to pid picker - bodyblock users who are not in the new debugger experiment.
   ([#8935](https://github.com/Microsoft/vscode-python/issues/8935))
1. Pass `-y` to `conda installer` to disable the prompt to install, as user has already ok'ed this action.
   ([#9194](https://github.com/Microsoft/vscode-python/issues/9194))
1. Updated `ptvsd` debugger to version v5.0.0a12.
   ([#9310](https://github.com/Microsoft/vscode-python/issues/9310))
1. Use common code to manipulate notebook cells.
   ([#9386](https://github.com/Microsoft/vscode-python/issues/9386))
1. Add support for `Find` in the `Notebook Editor`.
   ([#9470](https://github.com/Microsoft/vscode-python/issues/9470))
1. Update Chinese (Traditional) translation.
   (thanks [pan93412](https://github.com/pan93412))
   ([#9548](https://github.com/Microsoft/vscode-python/issues/9548))
1. Look for Conda interpreters in `~/opt/*conda*/` directory as well.
   ([#9701](https://github.com/Microsoft/vscode-python/issues/9701))

### Fixes

1. add --ip=127.0.0.1 argument of jupyter server when running in k8s container
   ([#9976](https://github.com/Microsoft/vscode-python/issues/9976))
1. Correct the server and kernel text for when not connected to a server.
   ([#9933](https://github.com/Microsoft/vscode-python/issues/9933))
1. Make sure to clear variable list on restart kernel.
   ([#9740](https://github.com/Microsoft/vscode-python/issues/9740))
1. Use the autoStart server when available.
   ([#9926](https://github.com/Microsoft/vscode-python/issues/9926))
1. Removed unnecessary warning when executing cells that use Scrapbook,
   Fix an html crash when using not supported mime types
   ([#9796](https://github.com/microsoft/vscode-python/issues/9796))
1. Fixed the focus on the interactive window when pressing ctrl + 1/ ctrl + 2
   ([#9693](https://github.com/microsoft/vscode-python/issues/9693))
1. Fix variable explorer in Interactive and Notebook editors from interfering with execution.
   ([#5980](https://github.com/Microsoft/vscode-python/issues/5980))
1. Fix a crash when using pytest to discover doctests with unknown line number.
   (thanks [Olivier Grisel](https://github.com/ogrisel/))
   ([#7487](https://github.com/Microsoft/vscode-python/issues/7487))
1. Don't show any install product prompts if interpreter is not selected.
   ([#7750](https://github.com/Microsoft/vscode-python/issues/7750))
1. Allow PYTHONWARNINGS to be set and not have it interfere with the launching of Jupyter notebooks.
   ([#8496](https://github.com/Microsoft/vscode-python/issues/8496))
1. Pressing Esc in the config quickpick now cancels debugging.
   ([#8626](https://github.com/Microsoft/vscode-python/issues/8626))
1. Support resolveCompletionItem so that we can get Jedi docstrings in Notebook Editor and Interactive Window.
   ([#8706](https://github.com/Microsoft/vscode-python/issues/8706))
1. Disable interrupt, export, and restart buttons when already performing an interrupt, export, or restart for Notebooks and the Interactive window.
   ([#8716](https://github.com/Microsoft/vscode-python/issues/8716))
1. Icons now cannot be overwritten by styles in cell outputs.
   ([#8946](https://github.com/Microsoft/vscode-python/issues/8946))
1. Command palette (and other keyboard shortcuts) don't work from the Interactive/Notebook editor in the insider's build (or when setting 'useWebViewServer').
   ([#8976](https://github.com/Microsoft/vscode-python/issues/8976))
1. Fix issue that prevented language server diagnostics from being published.
   ([#9096](https://github.com/Microsoft/vscode-python/issues/9096))
1. Fixed the native editor toolbar so it won't overlap.
   ([#9140](https://github.com/Microsoft/vscode-python/issues/9140))
1. Selectively render output and monaco editor to improve performance.
   ([#9204](https://github.com/Microsoft/vscode-python/issues/9204))
1. Set test debug console default to be `internalConsole`.
   ([#9259](https://github.com/Microsoft/vscode-python/issues/9259))
1. Fix the Data Science "Enable Plot Viewer" setting to pass figure_formats correctly when turned off.
   ([#9420](https://github.com/Microsoft/vscode-python/issues/9420))
1. Shift+Enter can no longer send multiple lines to the interactive window.
   ([#9437](https://github.com/Microsoft/vscode-python/issues/9437))
1. Shift+Enter can no longer run code in the terminal.
   ([#9439](https://github.com/Microsoft/vscode-python/issues/9439))
1. Scrape output to get the details of the registered kernel.
   ([#9444](https://github.com/Microsoft/vscode-python/issues/9444))
1. Update `ptvsd` debugger to version v5.0.0a11. Fixes signing for `inject_dll_x86.exe`.
   ([#9474](https://github.com/Microsoft/vscode-python/issues/9474))
1. Disable use of `conda run`.
   ([#9490](https://github.com/Microsoft/vscode-python/issues/9490))
1. Improvements to responsiveness of code completions in `Notebook` cells and `Interactive Window`.
   ([#9494](https://github.com/Microsoft/vscode-python/issues/9494))
1. Revert changes related to calling `mypy` with relative paths.
   ([#9496](https://github.com/Microsoft/vscode-python/issues/9496))
1. Remove default `pathMappings` for attach to local process by process Id.
   ([#9533](https://github.com/Microsoft/vscode-python/issues/9533))
1. Ensure event handler is bound to the right context.
   ([#9539](https://github.com/Microsoft/vscode-python/issues/9539))
1. Use the correct interpreter when creating the Python execution service used as a fallback by the Daemon.
   ([#9566](https://github.com/Microsoft/vscode-python/issues/9566))
1. Ensure environment variables are always strings in `launch.json`.
   ([#9568](https://github.com/Microsoft/vscode-python/issues/9568))
1. Fix error in developer console about serializing gather rules.
   ([#9571](https://github.com/Microsoft/vscode-python/issues/9571))
1. Do not open the output panel when building workspace symbols.
   ([#9603](https://github.com/Microsoft/vscode-python/issues/9603))
1. Use an activated environment python process to check if modules are installed.
   ([#9643](https://github.com/Microsoft/vscode-python/issues/9643))
1. When hidden 'useWebViewServer' is true, clicking on links in Notebook output don't work.
   ([#9645](https://github.com/Microsoft/vscode-python/issues/9645))
1. Always use latest version of the debugger when building extension.
   ([#9652](https://github.com/Microsoft/vscode-python/issues/9652))
1. Fix background for interactive window copy icon.
   ([#9658](https://github.com/Microsoft/vscode-python/issues/9658))
1. Fix text in markdown cells being lost when clicking away.
   ([#9719](https://github.com/Microsoft/vscode-python/issues/9719))
1. Fix debugging of Interactive Window cells. Don't start up a second notebook at Interactive Window startup.
   ([#9780](https://github.com/Microsoft/vscode-python/issues/9780))
1. When comitting intellisense in Notebook Editor with Jedi place code in correct position.
   ([#9857](https://github.com/Microsoft/vscode-python/issues/9857))
1. Ignore errors coming from stat(), where appropriate.
   ([#9901](https://github.com/Microsoft/vscode-python/issues/9901))

### Code Health

1. Use [prettier](https://prettier.io/) as the `TypeScript` formatter and [Black](https://github.com/psf/black) as the `Python` formatter within the extension.
   ([#2012](https://github.com/Microsoft/vscode-python/issues/2012))
1. Use `vanillajs` for build scripts (instead of `typescript`, avoids the step of having to transpile).
   ([#5674](https://github.com/Microsoft/vscode-python/issues/5674))
1. Remove npx from webpack build as it [breaks on windows](https://github.com/npm/npx/issues/5) on npm 6.11+ and doesn't seem to be getting fixes. Update npm to current version.
   ([#7197](https://github.com/Microsoft/vscode-python/issues/7197))
1. Clean up npm dependencies.
   ([#8302](https://github.com/Microsoft/vscode-python/issues/8302))
1. Update version of node to `12.4.0`.
   ([#8453](https://github.com/Microsoft/vscode-python/issues/8453))
1. Use a hidden terminal to retrieve environment variables of an activated Python Interpreter.
   ([#8928](https://github.com/Microsoft/vscode-python/issues/8928))
1. Fix broken LiveShare connect via codewatcher test.
   ([#9005](https://github.com/Microsoft/vscode-python/issues/9005))
1. Refactor `webpack` build scripts to build `DS` bundles using separate config files.
   ([#9055](https://github.com/Microsoft/vscode-python/issues/9055))
1. Change how we handle keyboard input for our functional editor tests.
   ([#9084](https://github.com/Microsoft/vscode-python/issues/9084))
1. Fix working directory path verification for notebook tests.
   ([#9191](https://github.com/Microsoft/vscode-python/issues/9191))
1. Update Jedi to 0.15.2 and parso to 0.5.2.
   ([#9243](https://github.com/Microsoft/vscode-python/issues/9243))
1. Added a test performance measuring pipeline.
   ([#9421](https://github.com/Microsoft/vscode-python/issues/9421))
1. Audit existing telemetry events for datascience or ds_internal.
   ([#9626](https://github.com/Microsoft/vscode-python/issues/9626))
1. CI failure on Data science memoize-one dependency being removed.
   ([#9646](https://github.com/Microsoft/vscode-python/issues/9646))
1. Make sure to check dependencies during PRs.
   ([#9714](https://github.com/Microsoft/vscode-python/issues/9714))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2020.1.0 (6 January 2020)

### Enhancements

1. Added experiment for reloading feature of debugging web apps.
   ([#3473](https://github.com/Microsoft/vscode-python/issues/3473))
1. Activate conda environment using path when name is not available.
   ([#3834](https://github.com/Microsoft/vscode-python/issues/3834))
1. Add QuickPick dropdown option _Run All/Debug All_ when clicking on a Code Lens for a parametrized test to be able to run/debug all belonging test variants at once.
   (thanks to [Philipp Loose](https://github.com/phloose))
   ([#5608](https://github.com/Microsoft/vscode-python/issues/5608))
1. Use Octicons in Code Lenses. (thanks [Aidan Dang](https://github.com/AidanGG))
   ([#7192](https://github.com/Microsoft/vscode-python/issues/7192))
1. Improve startup performance of Jupyter by using a Python daemon.
   ([#7242](https://github.com/Microsoft/vscode-python/issues/7242))
1. Automatically indent following `async for` and `async with` statements.
   ([#7344](https://github.com/Microsoft/vscode-python/issues/7344))
1. Added extension option `activateEnvInCurrentTerminal` to detect if environment should be activated in the current open terminal.
   ([#7665](https://github.com/Microsoft/vscode-python/issues/7665))
1. Add telemetry for usage of activateEnvInCurrentTerminal setting.
   ([#8004](https://github.com/Microsoft/vscode-python/issues/8004))
1. Support multiprocess debugging using the new python debug adapter.
   ([#8105](https://github.com/Microsoft/vscode-python/issues/8105))
1. Support a per interpreter language server so that notebooks that aren't using the currently selected python can still have intellisense.
   ([#8206](https://github.com/Microsoft/vscode-python/issues/8206))
1. Add "processId" key in launch.json to enable attach-to-local-pid scenarios when using the new debug adapter.
   ([#8384](https://github.com/Microsoft/vscode-python/issues/8384))
1. Populate survey links with variables
   ([#8484](https://github.com/Microsoft/vscode-python/issues/8484))
1. Support the ability to take input from users inside of a notebook or the Interactive Window.
   ([#8601](https://github.com/Microsoft/vscode-python/issues/8601))
1. Create an MRU list for Jupyter notebook servers.
   ([#8613](https://github.com/Microsoft/vscode-python/issues/8613))
1. Add icons to the quick pick list for specifying the Jupyter server URI.
   ([#8753](https://github.com/Microsoft/vscode-python/issues/8753))
1. Added kernel status and selection toolbar to the notebook editor.
   ([#8866](https://github.com/Microsoft/vscode-python/issues/8866))
1. Updated `ptvsd` debugger to version v5.0.0a9.
   ([#8930](https://github.com/Microsoft/vscode-python/issues/8930))
1. Add ability to select an existing remote `kernel`.
   ([#4644](https://github.com/Microsoft/vscode-python/issues/4644))
1. Notify user when starting jupyter times out and added `Jupyter` output panel to display output from Jupyter.
   ([#9068](https://github.com/Microsoft/vscode-python/issues/9068))

### Fixes

1. Add implementations for `python.workspaceSymbols.rebuildOnStart` and `python.workspaceSymbols.rebuildOnFileSave`.
   ([#793](https://github.com/Microsoft/vscode-python/issues/793))
1. Use relative paths when invoking mypy.
   (thanks to [yxliang01](https://github.com/yxliang01))
   ([#5326](https://github.com/Microsoft/vscode-python/issues/5326))
1. Make the dataviewer open a window much faster. Total load time is the same, but initial response is much faster.
   ([#6729](https://github.com/Microsoft/vscode-python/issues/6729))
1. Make sure the data viewer for notebooks comes up as soon as the user clicks.
   ([#6840](https://github.com/Microsoft/vscode-python/issues/6840))
1. Support saving plotly graphs in the Interactive Window or inside of a notebook.
   ([#7221](https://github.com/Microsoft/vscode-python/issues/7221))
1. Change 0th line in output to 1th in flake8.
   (thanks to [Ma007ks](https://github.com/Ma007ks/))
   ([#7349](https://github.com/Microsoft/vscode-python/issues/7349))
1. Support local images in markdown and output for notebooks.
   ([#7704](https://github.com/Microsoft/vscode-python/issues/7704))
1. Default notebookFileRoot to match the file that a notebook was opened with (or the first file run for the interactive window).
   ([#7780](https://github.com/Microsoft/vscode-python/issues/7780))
1. Execution count and output are cleared from the .ipynb file when the user clicks the 'Clear All Output'.
   ([#7853](https://github.com/Microsoft/vscode-python/issues/7853))
1. Fix clear_output(True) to work in notebook cells.
   ([#7970](https://github.com/Microsoft/vscode-python/issues/7970))
1. Prevented '\$0' from appearing inside brackets when using intellisense autocomplete.
   ([#8101](https://github.com/Microsoft/vscode-python/issues/8101))
1. Intellisense can sometimes not appear in notebooks or the interactive window, especially when something is a large list.
   ([#8140](https://github.com/Microsoft/vscode-python/issues/8140))
1. Correctly update interpreter and kernel info in the metadata.
   ([#8223](https://github.com/Microsoft/vscode-python/issues/8223))
1. Dataframe viewer should use the same interpreter as the active notebook is using.
   ([#8227](https://github.com/Microsoft/vscode-python/issues/8227))
1. 'breakpoint' line shows up in the interactive window when debugging a cell.
   ([#8260](https://github.com/Microsoft/vscode-python/issues/8260))
1. Run above should include all code, and not just cells above.
   ([#8403](https://github.com/Microsoft/vscode-python/issues/8403))
1. Fix issue with test discovery when using `unittest` with `--pattern` flag.
   ([#8465](https://github.com/Microsoft/vscode-python/issues/8465))
1. Set focus to the corresponding `Native Notebook Editor` when opening an `ipynb` file again.
   ([#8506](https://github.com/Microsoft/vscode-python/issues/8506))
1. Fix using all environment variables when running in integrated terminal.
   ([#8584](https://github.com/Microsoft/vscode-python/issues/8584))
1. Fix display of SVG images from previously executed ipynb files.
   ([#8600](https://github.com/Microsoft/vscode-python/issues/8600))
1. Fixes that the test selection drop-down did not open when a code lens for a parameterized test was clicked on windows.
   ([#8627](https://github.com/Microsoft/vscode-python/issues/8627))
1. Changes to how `node-fetch` is bundled in the extension.
   ([#8665](https://github.com/Microsoft/vscode-python/issues/8665))
1. Re-enable support for source-maps.
   ([#8686](https://github.com/Microsoft/vscode-python/issues/8686))
1. Fix order for print/display outputs in a notebook cell.
   ([#8739](https://github.com/Microsoft/vscode-python/issues/8739))
1. Fix scrolling inside of intellisense hover windows for notebooks.
   ([#8843](https://github.com/Microsoft/vscode-python/issues/8843))
1. Fix scrolling in large cells.
   ([#8895](https://github.com/Microsoft/vscode-python/issues/8895))
1. Set `python.workspaceSymbols.enabled` to false by default.
   ([#9046](https://github.com/Microsoft/vscode-python/issues/9046))
1. Add ability to pick a remote kernel.
   ([#3763](https://github.com/Microsoft/vscode-python/issues/3763))
1. Do not set "redirectOutput": true by default when not specified in launch.json, unless "console" is "internalConsole".
   ([#8865](https://github.com/Microsoft/vscode-python/issues/8865))
1. Fix slowdown in Notebook editor caused by using global storage for too much data.
   ([#8961](https://github.com/Microsoft/vscode-python/issues/8961))
1. 'y' and 'm' keys toggle cell type but also add a 'y' or 'm' to the cell.
   ([#9078](https://github.com/Microsoft/vscode-python/issues/9078))
1. Remove unnecessary matplotlib import from first cell.
   ([#9099](https://github.com/Microsoft/vscode-python/issues/9099))
1. Two 'default' options in the select a Jupyter server URI picker.
   ([#9101](https://github.com/Microsoft/vscode-python/issues/9101))
1. Plot viewer never opens.
   ([#9114](https://github.com/Microsoft/vscode-python/issues/9114))
1. Fix color contrast for kernel selection control.
   ([#9138](https://github.com/Microsoft/vscode-python/issues/9138))
1. Disconnect between displayed server and connected server in Kernel selection UI.
   ([#9151](https://github.com/Microsoft/vscode-python/issues/9151))
1. Eliminate extra storage space from global storage on first open of a notebook that had already written to storage.
   ([#9159](https://github.com/Microsoft/vscode-python/issues/9159))
1. Change kernel selection MRU to just save connection time and don't try to connect when popping the list. Plus add unit tests for it.
   ([#9171](https://github.com/Microsoft/vscode-python/issues/9171))

### Code Health

1. Re-enable our mac 3.7 debugger tests as a blocking ptvsd issue has been resolved.
   ([#6646](https://github.com/Microsoft/vscode-python/issues/6646))
1. Use "conda run" (instead of using the "python.pythonPath" setting directly) when executing
   Python and an Anaconda environment is selected.
   ([#7696](https://github.com/Microsoft/vscode-python/issues/7696))
1. Change state management for react code to use redux.
   ([#7949](https://github.com/Microsoft/vscode-python/issues/7949))
1. Pass resource when accessing VS Code settings.
   ([#8001](https://github.com/Microsoft/vscode-python/issues/8001))
1. Adjust some notebook and interactive window telemetry.
   ([#8254](https://github.com/Microsoft/vscode-python/issues/8254))
1. Added a new telemetry event called `DATASCIENCE.NATIVE.OPEN_NOTEBOOK_ALL` that fires every time the user opens a jupyter notebook by any means.
   ([#8262](https://github.com/Microsoft/vscode-python/issues/8262))
1. Create python daemon for execution of python code.
   ([#8451](https://github.com/Microsoft/vscode-python/issues/8451))
1. Update npm package `https-proxy-agent` by updating the packages that pull it in.
   ([#8537](https://github.com/Microsoft/vscode-python/issues/8537))
1. Improve startup times of unit tests by optionally ignoring some bootstrapping required for `monaco` and `react` tests.
   ([#8564](https://github.com/Microsoft/vscode-python/issues/8564))
1. Skip checking dependencies on CI in PRs.
   ([#8840](https://github.com/Microsoft/vscode-python/issues/8840))
1. Fix installation of sqlite on CI linux machines.
   ([#8883](https://github.com/Microsoft/vscode-python/issues/8883))
1. Fix the "convert to python" functional test failure.
   ([#8899](https://github.com/Microsoft/vscode-python/issues/8899))
1. Remove unused auto-save-enabled telemetry.
   ([#8906](https://github.com/Microsoft/vscode-python/issues/8906))
1. Added ability to wait for completion of the installation of modules.
   ([#8952](https://github.com/Microsoft/vscode-python/issues/8952))
1. Fix failing Data Viewer functional tests.
   ([#8992](https://github.com/Microsoft/vscode-python/issues/8992))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.11.1 (22 November 2019)

### Fixes

1. Some LaTeX equations do not print in notebooks or the interactive window.
   ([#8673](https://github.com/Microsoft/vscode-python/issues/8673))
1. Converting to python script no longer working from a notebook.
   ([#8677](https://github.com/Microsoft/vscode-python/issues/8677))
1. Fixes to starting `Jupyter` in a `Docker` container.
   ([#8661](https://github.com/Microsoft/vscode-python/issues/8661))
1. Ensure arguments are generated correctly for `getRemoteLauncherCommand` when in debugger experiment.
   ([#8685](https://github.com/Microsoft/vscode-python/issues/8685))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.11.0 (18 November 2019)

### Enhancements

1. Add Vega support into our list of transforms for output.
   ([#4125](https://github.com/Microsoft/vscode-python/issues/4125))
1. Add `.flake8` file association as ini-file.
   (thanks [thernstig](https://github.com/thernstig/))
   ([#6506](https://github.com/Microsoft/vscode-python/issues/6506))
1. Provide user feedback when searching for a Jupyter server to use and allow the user to cancel this process.
   ([#7262](https://github.com/Microsoft/vscode-python/issues/7262))
1. By default, don't change matplotlib themes and place all plots on a white background regardless of VS Code theme. Add a setting to allow for plots to try to theme.
   ([#8000](https://github.com/Microsoft/vscode-python/issues/8000))
1. Prompt to open exported `Notebook` in the `Notebook Editor`.
   ([#8078](https://github.com/Microsoft/vscode-python/issues/8078))
1. Add commands translation for Persian locale.
   (thanks [Nikronic](https://github.com/Nikronic))
   ([#8092](https://github.com/Microsoft/vscode-python/issues/8092))
1. Enhance "select a workspace" message when selecting interpreter.
   (thanks [Nikolay Kondratyev](https://github.com/kondratyev-nv/))
   ([#8103](https://github.com/Microsoft/vscode-python/issues/8103))
1. Add logging support for python debug adapter.
   ([#8106](https://github.com/Microsoft/vscode-python/issues/8106))
1. Style adjustments to line numbers (color and width) in the `Native Editor`, to line up with VS Code styles.
   ([#8289](https://github.com/Microsoft/vscode-python/issues/8289))
1. Added command translations for Turkish.
   (thanks to [alioguzhan](https://github.com/alioguzhan/))
   ([#8320](https://github.com/Microsoft/vscode-python/issues/8320))
1. Toolbar was updated to take less space and be reached more easily.
   ([#8366](https://github.com/Microsoft/vscode-python/issues/8366))

### Fixes

1. Fix running a unittest file executing only the first test.
   (thanks [Nikolay Kondratyev](https://github.com/kondratyev-nv/))
   ([#4567](https://github.com/Microsoft/vscode-python/issues/4567))
1. Force the pytest root dir to always be the workspace root folder.
   ([#6548](https://github.com/Microsoft/vscode-python/issues/6548))
1. The notebook editor will now treat wrapped lines as different lines, so moving in cells and between cells with the arrow keys (and j and k) will be easier.
   ([#7227](https://github.com/Microsoft/vscode-python/issues/7227))
1. During test discovery, ignore tests generated by pytest plugins (like pep8).
   Tests like that were causing discovery to fail.
   ([#7287](https://github.com/Microsoft/vscode-python/issues/7287))
1. When exporting a notebook editor to python script don't use the temp file location for generating the export.
   ([#7567](https://github.com/Microsoft/vscode-python/issues/7567))
1. Unicode symbol used to mark skipped tests was almost not visible on Linux and Windows.
   ([#7705](https://github.com/Microsoft/vscode-python/issues/7705))
1. Editing cells in a notebook, closing VS code, and then reopening will not have the cell content visible.
   ([#7754](https://github.com/Microsoft/vscode-python/issues/7754))
1. Sonar warnings.
   ([#7812](https://github.com/Microsoft/vscode-python/issues/7812))
1. Remove --ci flag from install_ptvsd.py to fix execution of "Setup" instructions from CONTRIBUTING.md.
   ([#7814](https://github.com/Microsoft/vscode-python/issues/7814))
1. Add telemetry for control groups in debug adapter experiments.
   ([#7817](https://github.com/Microsoft/vscode-python/issues/7817))
1. Allow the language server to pick a default caching mode.
   ([#7821](https://github.com/Microsoft/vscode-python/issues/7821))
1. Respect ignoreVSCodeTheme setting and correctly swap icons when changing from light to dark color themes.
   ([#7847](https://github.com/Microsoft/vscode-python/issues/7847))
1. 'Clear All Output' now deletes execution count for all cells.
   ([#7853](https://github.com/Microsoft/vscode-python/issues/7853))
1. If a Jupyter server fails to start, allow user to retry without having to restart VS code.
   ([#7865](https://github.com/Microsoft/vscode-python/issues/7865))
1. Fix strings of commas appearing in text/html output in the notebook editor.
   ([#7873](https://github.com/Microsoft/vscode-python/issues/7873))
1. When creating a new blank notebook, it has existing text in it already.
   ([#7980](https://github.com/Microsoft/vscode-python/issues/7980))
1. Can now include a LaTeX-style equation without surrounding the equation with '\$' in a markdown cell.
   ([#7992](https://github.com/Microsoft/vscode-python/issues/7992))
1. Make a spinner appear during executing a cell.
   ([#8003](https://github.com/Microsoft/vscode-python/issues/8003))
1. Signature help is overflowing out of the signature help widget on the Notebook Editor.
   ([#8006](https://github.com/Microsoft/vscode-python/issues/8006))
1. Ensure intellisense (& similar widgets/popups) are dispaled for one cell in the Notebook editor.
   ([#8007](https://github.com/Microsoft/vscode-python/issues/8007))
1. Correctly restart Jupyter sessions when the active interpreter is changed.
   ([#8019](https://github.com/Microsoft/vscode-python/issues/8019))
1. Clear up wording around jupyterServerURI and remove the quick pick from the flow of setting that.
   ([#8021](https://github.com/Microsoft/vscode-python/issues/8021))
1. Use actual filename comparison for filename equality checks.
   ([#8022](https://github.com/Microsoft/vscode-python/issues/8022))
1. Opening a notebook a second time round with changes (made from another editor) should be preserved.
   ([#8025](https://github.com/Microsoft/vscode-python/issues/8025))
1. Minimize the GPU impact of the interactive window and the notebook editor.
   ([#8039](https://github.com/Microsoft/vscode-python/issues/8039))
1. Store version of the `Python` interpreter (kernel) in the notebook metadata when running cells.
   ([#8064](https://github.com/Microsoft/vscode-python/issues/8064))
1. Make shift+enter not take focus unless about to add a new cell.
   ([#8069](https://github.com/Microsoft/vscode-python/issues/8069))
1. When checking the version of `pandas`, use the same interpreter used to start `Jupyter`.
   ([#8084](https://github.com/Microsoft/vscode-python/issues/8084))
1. Make brackets and paranthesis auto complete in the Notebook Editor and Interactive Window (based on editor settings).
   ([#8086](https://github.com/Microsoft/vscode-python/issues/8086))
1. Cannot create more than one blank notebook.
   ([#8132](https://github.com/Microsoft/vscode-python/issues/8132))
1. Fix for code disappearing after switching between markdown and code in a Notebook Editor.
   ([#8141](https://github.com/Microsoft/vscode-python/issues/8141))
1. Support `⌘+s` keyboard shortcut for saving `Notebooks`.
   ([#8151](https://github.com/Microsoft/vscode-python/issues/8151))
1. Fix closing a Notebook Editor to actually wait for the kernel to restart.
   ([#8167](https://github.com/Microsoft/vscode-python/issues/8167))
1. Inserting a cell in a notebook can sometimes cause the contents to be the cell below it.
   ([#8194](https://github.com/Microsoft/vscode-python/issues/8194))
1. Scroll the notebook editor when giving focus or changing line of a code cell.
   ([#8205](https://github.com/Microsoft/vscode-python/issues/8205))
1. Prevent code from changing in the Notebook Editor while running a cell.
   ([#8215](https://github.com/Microsoft/vscode-python/issues/8215))
1. When updating the Python extension, unsaved changes to notebooks are lost.
   ([#8263](https://github.com/Microsoft/vscode-python/issues/8263))
1. Fix CI to use Python 3.7.5.
   ([#8296](https://github.com/Microsoft/vscode-python/issues/8296))
1. Correctly transition markdown cells into code cells.
   ([#8386](https://github.com/Microsoft/vscode-python/issues/8386))
1. Fix cells being erased when saving and then changing focus to another cell.
   ([#8399](https://github.com/Microsoft/vscode-python/issues/8399))
1. Add a white background for most non-text mimetypes. This lets stuff like Atlair look good in dark mode.
   ([#8423](https://github.com/Microsoft/vscode-python/issues/8423))
1. Export to python button is blue in native editor.
   ([#8424](https://github.com/Microsoft/vscode-python/issues/8424))
1. CTRL+Z is deleting cells. It should only undo changes inside of the code for a cell. 'Z' and 'SHIFT+Z' are for undoing/redoing cell adds/moves.
   ([#7999](https://github.com/Microsoft/vscode-python/issues/7999))
1. Ensure clicking `ctrl+s` in a new `notebook` prompts the user to select a file once instead of twice.
   ([#8138](https://github.com/Microsoft/vscode-python/issues/8138))
1. Creating a new blank notebook should not require a search for jupyter.
   ([#8481](https://github.com/Microsoft/vscode-python/issues/8481))
1. Arrowing up and down through cells can lose code that was just typed.
   ([#8491](https://github.com/Microsoft/vscode-python/issues/8491))
1. After pasting code, arrow keys don't navigate in a cell.
   ([#8495](https://github.com/Microsoft/vscode-python/issues/8495))
1. Typing 'z' in a cell causes the cell to disappear.
   ([#8594](https://github.com/Microsoft/vscode-python/issues/8594))

### Code Health

1. Add unit tests for src/client/common/process/pythonProcess.ts.
   ([#6065](https://github.com/Microsoft/vscode-python/issues/6065))
1. Remove try...catch around use of vscode.env.shell.
   ([#6912](https://github.com/Microsoft/vscode-python/issues/6912))
1. Test plan needed to be updated to include support for the Notebook Editor.
   ([#7593](https://github.com/Microsoft/vscode-python/issues/7593))
1. Add test step to get correct pywin32 installed with python 3.6 on windows.
   ([#7798](https://github.com/Microsoft/vscode-python/issues/7798))
1. Update Test Explorer icons to match new VS Code icons.
   ([#7809](https://github.com/Microsoft/vscode-python/issues/7809))
1. Fix native editor mime type functional test.
   ([#7877](https://github.com/Microsoft/vscode-python/issues/7877))
1. Fix variable explorer loading test.
   ([#7878](https://github.com/Microsoft/vscode-python/issues/7878))
1. Add telemetry to capture usage of features in the `Notebook Editor` for `Data Science` features.
   ([#7908](https://github.com/Microsoft/vscode-python/issues/7908))
1. Fix debug temporary functional test for Mac / Linux.
   ([#7994](https://github.com/Microsoft/vscode-python/issues/7994))
1. Variable explorer tests failing on nightly.
   ([#8124](https://github.com/Microsoft/vscode-python/issues/8124))
1. Timeout with new waitForMessage in native editor tests.
   ([#8255](https://github.com/Microsoft/vscode-python/issues/8255))
1. Remove code used to track perf of creation classes.
   ([#8280](https://github.com/Microsoft/vscode-python/issues/8280))
1. Update TypeScript to `3.7`.
   ([#8395](https://github.com/Microsoft/vscode-python/issues/8395))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [pyparsing](https://pypi.org/project/pyparsing/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.10.1 (22 October 2019)

### Enhancements

1. Support other variables for notebookFileRoot besides ${workspaceRoot}. Specifically allow things like ${fileDirName} so that the dir of the first file run in the interactive window is used for the current directory.
   ([#4441](https://github.com/Microsoft/vscode-python/issues/4441))
1. Add command palette commands for native editor (run all cells, run selected cell, add new cell). And remove interactive window commands from contexts where they don't apply.
   ([#7800](https://github.com/Microsoft/vscode-python/issues/7800))
1. Added ability to auto-save chagnes made to the notebook.
   ([#7831](https://github.com/Microsoft/vscode-python/issues/7831))

### Fixes

1. Fix regression to allow connection to servers with no token and no password and add functional test for this scenario
   ([#7137](https://github.com/Microsoft/vscode-python/issues/7137))
1. Perf improvements for opening notebooks with more than 100 cells.
   ([#7483](https://github.com/Microsoft/vscode-python/issues/7483))
1. Fix jupyter server startup hang when xeus-cling kernel is installed.
   ([#7569](https://github.com/Microsoft/vscode-python/issues/7569))
1. Make interactive window and native take their fontSize and fontFamily from the settings in VS Code.
   ([#7624](https://github.com/Microsoft/vscode-python/issues/7624))
1. Fix a hang in the Interactive window when connecting guest to host after the host has already started the interactive window.
   ([#7638](https://github.com/Microsoft/vscode-python/issues/7638))
1. Change the default cell marker to '# %%' instead of '#%%' to prevent linter errors in python files with markers.
   Also added a new setting to change this - 'python.dataScience.defaultCellMarker'.
   ([#7674](https://github.com/Microsoft/vscode-python/issues/7674))
1. When there's no workspace open, use the directory of the opened file as the root directory for a jupyter session.
   ([#7688](https://github.com/Microsoft/vscode-python/issues/7688))
1. Fix selection and focus not updating when clicking around in a notebook editor.
   ([#7802](https://github.com/Microsoft/vscode-python/issues/7802))
1. Fix add new cell buttons in the notebook editor to give the new cell focus.
   ([#7820](https://github.com/Microsoft/vscode-python/issues/7820))
1. Do not use the PTVSD package version in the folder name for the wheel experiment.
   ([#7836](https://github.com/Microsoft/vscode-python/issues/7836))
1. Prevent updates to the cell text when cell execution of the same cell has commenced or completed.
   ([#7844](https://github.com/Microsoft/vscode-python/issues/7844))
1. Hide the parameters intellisense widget in the `Notebook Editor` when it is not longer required.
   ([#7851](https://github.com/Microsoft/vscode-python/issues/7851))
1. Allow the "Create New Blank Jupyter Notebook" command to be run when the python extension is not loaded yet.
   ([#7888](https://github.com/Microsoft/vscode-python/issues/7888))
1. Ensure the `*.trie` files related to `font kit` npm module are copied into the output directory as part of the `Webpack` bundling operation.
   ([#7899](https://github.com/Microsoft/vscode-python/issues/7899))
1. CTRL+S is not saving a Notebook file.
   ([#7904](https://github.com/Microsoft/vscode-python/issues/7904))
1. When automatically opening the `Notebook Editor`, then ignore uris that do not have a `file` scheme
   ([#7905](https://github.com/Microsoft/vscode-python/issues/7905))
1. Minimize the changes to an ipynb file when saving - preserve metadata and spacing.
   ([#7960](https://github.com/Microsoft/vscode-python/issues/7960))
1. Fix intellisense popping up in the wrong spot when first typing in a cell.
   ([#8009](https://github.com/Microsoft/vscode-python/issues/8009))
1. Fix python.dataScience.maxOutputSize to be honored again.
   ([#8010](https://github.com/Microsoft/vscode-python/issues/8010))
1. Fix markdown disappearing after editing and hitting the escape key.
   ([#8045](https://github.com/Microsoft/vscode-python/issues/8045))

### Code Health

1. Add functional tests for notebook editor's use of the variable list.
   ([#7369](https://github.com/Microsoft/vscode-python/issues/7369))
1. More functional tests for the notebook editor.
   ([#7372](https://github.com/Microsoft/vscode-python/issues/7372))
1. Update version of `@types/vscode`.
   ([#7832](https://github.com/Microsoft/vscode-python/issues/7832))
1. Use `Webview.asWebviewUri` to generate a URI for use in the `Webview Panel` instead of hardcoding the resource `vscode-resource`.
   ([#7834](https://github.com/Microsoft/vscode-python/issues/7834))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.10.0 (8 October 2019)

### Enhancements

1. Experimental version of a native editor for ipynb files.
   ([#5959](https://github.com/Microsoft/vscode-python/issues/5959))
1. Added A/A testing.
   ([#6793](https://github.com/Microsoft/vscode-python/issues/6793))
1. Opt insiders users into beta language server by default.
   ([#7108](https://github.com/Microsoft/vscode-python/issues/7108))
1. Add basic liveshare support for native.
   ([#7235](https://github.com/Microsoft/vscode-python/issues/7235))
1. Change main toolbar to match design spec.
   ([#7240](https://github.com/Microsoft/vscode-python/issues/7240))
1. Telemetry for native editor support.
   ([#7252](https://github.com/Microsoft/vscode-python/issues/7252))
1. Change Variable Explorer to use a sticky button on the main toolbar.
   ([#7354](https://github.com/Microsoft/vscode-python/issues/7354))
1. Add left side navigation bar to native editor.
   ([#7377](https://github.com/Microsoft/vscode-python/issues/7377))
1. Add middle toolbar to a native editor cell.
   ([#7378](https://github.com/Microsoft/vscode-python/issues/7378))
1. Indented the status bar for outputs and changed the background color in the native editor.
   ([#7379](https://github.com/Microsoft/vscode-python/issues/7379))
1. Added a setting `python.experiments.enabled` to enable/disable A/B tests within the extension.
   ([#7410](https://github.com/Microsoft/vscode-python/issues/7410))
1. Add a play button for all users.
   ([#7423](https://github.com/Microsoft/vscode-python/issues/7423))
1. Add a command to show the `Language Server` output panel.
   ([#7459](https://github.com/Microsoft/vscode-python/issues/7459))
1. Make empty notebooks (from File | New File) contain at least one cell.
   ([#7516](https://github.com/Microsoft/vscode-python/issues/7516))
1. Add "clear all output" button to native editor.
   ([#7517](https://github.com/Microsoft/vscode-python/issues/7517))
1. Add support for ptvsd and debug adapter experiments in remote debugging API.
   ([#7549](https://github.com/Microsoft/vscode-python/issues/7549))
1. Support other variables for `notebookFileRoot` besides `${workspaceRoot}`. Specifically allow things like `${fileDirName}` so that the directory of the first file run in the interactive window is used for the current directory.
   ([#4441](https://github.com/Microsoft/vscode-python/issues/4441))

### Fixes

1. Replaced occurrences of `pep8` with `pycodestyle.`
   All mentions of pep8 have been replaced with pycodestyle.
   Add script to replace outdated settings with the new ones in user settings.json
    - python.linting.pep8Args -> python.linting.pycodestyleArgs
    - python.linting.pep8CategorySeverity.E -> python.linting.pycodestyleCategorySeverity.E
    - python.linting.pep8CategorySeverity.W -> python.linting.pycodestyleCategorySeverity.W
    - python.linting.pep8Enabled -> python.linting.pycodestyleEnabled
    - python.linting.pep8Path -> python.linting.pycodestylePath
    - (thanks [Marsfan](https://github.com/Marsfan))
      ([#410](https://github.com/Microsoft/vscode-python/issues/410))
1. Do not change `foreground` colors in test statusbar.
   ([#4387](https://github.com/Microsoft/vscode-python/issues/4387))
1. Set the `__file__` variable whenever running code so that `__file__` usage works in the interactive window.
   ([#5459](https://github.com/Microsoft/vscode-python/issues/5459))
1. Ensure Windows Store install of Python is displayed in the statusbar.
   ([#5926](https://github.com/Microsoft/vscode-python/issues/5926))
1. Fix loging for determining python path from workspace of active text editor (thanks [Eric Bajumpaa (@SteelPhase)](https://github.com/SteelPhase)).
   ([#6282](https://github.com/Microsoft/vscode-python/issues/6282))
1. Changed the way scrolling is treated. Now we only check for the position of the scroll, the size of the cell won't matter.
   Still the interactive window will snap to the bottom if you already are at the bottom, and will stay in place if you are not. Like a chat window.
   Tested to work with:
    - regular code
    - dataframes
    - big and regular plots
      Turned the check of the scroll at the bottom from checking equal to checking a range to make it work with fractions.
      ([#6580](https://github.com/Microsoft/vscode-python/issues/6580))
1. Changed the name of the setting 'Run Magic Commands' to 'Run Startup Commands' to avoid confusion.
   ([#6842](https://github.com/Microsoft/vscode-python/issues/6842))
1. Fix the debugger being installed even when available from the VSCode install.
   ([#6907](https://github.com/Microsoft/vscode-python/issues/6907))
1. Fixes to detection of shell.
   ([#6928](https://github.com/Microsoft/vscode-python/issues/6928))
1. Delete the old session immediately after session restart instead of on close.
   ([#6975](https://github.com/Microsoft/vscode-python/issues/6975))
1. Add support for the new JUnit XML format used by pytest 5.1+.
   ([#6990](https://github.com/Microsoft/vscode-python/issues/6990))
1. Set a content security policy on webviews.
   ([#7007](https://github.com/Microsoft/vscode-python/issues/7007))
1. Fix regression to allow connection to servers with no token and no password and add functional test for this scenario.
   ([#7137](https://github.com/Microsoft/vscode-python/issues/7137))
1. Resolve variables such as `${workspaceFolder}` in the `envFile` setting of `launch.json`.
   ([#7210](https://github.com/Microsoft/vscode-python/issues/7210))
1. Fixed A/B testing sampling.
   ([#7218](https://github.com/Microsoft/vscode-python/issues/7218))
1. Added commands for 'dd', 'ctrl + enter', 'alt + enter', 'a', 'b', 'j', 'k' in the native Editor to behave just like JupyterLabs.
   ([#7229](https://github.com/Microsoft/vscode-python/issues/7229))
1. Add support for CTRL+S when the native editor has input focus (best we can do without true editor support)
   Also fix issue with opening two or more not gaining focus correctly.
   ([#7238](https://github.com/Microsoft/vscode-python/issues/7238))
1. Fix monaco editor layout perf.
   ([#7241](https://github.com/Microsoft/vscode-python/issues/7241))
1. Fix 'history' in the input box for the interactive window to work again. Up arrow and down arrow should now scroll through the things already typed in.
   ([#7253](https://github.com/Microsoft/vscode-python/issues/7253))
1. Fix plot viewer to allow exporting again.
   ([#7257](https://github.com/Microsoft/vscode-python/issues/7257))
1. Make ipynb files auto save on shutting down VS code as our least bad option at the moment.
   ([#7258](https://github.com/Microsoft/vscode-python/issues/7258))
1. Update icons to newer look.
   ([#7261](https://github.com/Microsoft/vscode-python/issues/7261))
1. The native editor will now wrap all its content instead of showing a horizontal scrollbar.
   ([#7272](https://github.com/Microsoft/vscode-python/issues/7272))
1. Deprecate the 'runMagicCommands' datascience setting.
   ([#7294](https://github.com/Microsoft/vscode-python/issues/7294))
1. Fix white icon background and finish update all icons to new style.
   ([#7302](https://github.com/Microsoft/vscode-python/issues/7302))
1. Fixes to display `Python` specific debug configurations in `launch.json`.
   ([#7304](https://github.com/Microsoft/vscode-python/issues/7304))
1. Fixed intellisense support on the native editor.
   ([#7316](https://github.com/Microsoft/vscode-python/issues/7316))
1. Fix double opening an ipynb file to still use the native editor.
   ([#7318](https://github.com/Microsoft/vscode-python/issues/7318))
1. 'j' and 'k' were reversed for navigating through the native editor.
   ([#7330](https://github.com/Microsoft/vscode-python/issues/7330))
1. 'a' keyboard shortcut doesn't add a cell above if current cell is the first.
   ([#7334](https://github.com/Microsoft/vscode-python/issues/7334))
1. Add the 'add cell' line between cells, on cells, and at the bottom and top.
   ([#7362](https://github.com/Microsoft/vscode-python/issues/7362))
1. Runtime errors cause the run button to disappear.
   ([#7370](https://github.com/Microsoft/vscode-python/issues/7370))
1. Surface jupyter notebook search errors to the user.
   ([#7392](https://github.com/Microsoft/vscode-python/issues/7392))
1. Allow cells to be re-executed on second open of an ipynb file.
   ([#7417](https://github.com/Microsoft/vscode-python/issues/7417))
1. Implement dirty file tracking for notebooks so that on reopening of VS code they are shown in the dirty state.
   Canceling the save will get them back to their on disk state.
   ([#7418](https://github.com/Microsoft/vscode-python/issues/7418))
1. Make ipynb files change to dirty when moving/deleting/changing cells.
   ([#7439](https://github.com/Microsoft/vscode-python/issues/7439))
1. Initial collapse / expand state broken by native liveshare work / gather.
   ([#7445](https://github.com/Microsoft/vscode-python/issues/7445))
1. Converting a native markdown cell to code removes the markdown source.
   ([#7446](https://github.com/Microsoft/vscode-python/issues/7446))
1. Text is cut off on the right hand side of a notebook editor.
   ([#7472](https://github.com/Microsoft/vscode-python/issues/7472))
1. Added a prompt asking users to enroll back in the insiders program.
   ([#7473](https://github.com/Microsoft/vscode-python/issues/7473))
1. Fix collapse bar and add new line spacing for the native editor.
   ([#7489](https://github.com/Microsoft/vscode-python/issues/7489))
1. Add new cell top most toolbar button should take selection into account when adding a cell.
   ([#7490](https://github.com/Microsoft/vscode-python/issues/7490))
1. Move up and move down arrows in native editor are different sizes.
   ([#7494](https://github.com/Microsoft/vscode-python/issues/7494))
1. Fix jedi intellisense in the notebook editor to be performant.
   ([#7497](https://github.com/Microsoft/vscode-python/issues/7497))
1. The add cell line should have a hover cursor.
   ([#7508](https://github.com/Microsoft/vscode-python/issues/7508))
1. Toolbar in the middle of a notebook cell should show up on hover.
   ([#7515](https://github.com/Microsoft/vscode-python/issues/7515))
1. 'z' key will now undo cell deletes/adds/moves.
   ([#7518](https://github.com/Microsoft/vscode-python/issues/7518))
1. Rename and restyle the save as python file button.
   ([#7519](https://github.com/Microsoft/vscode-python/issues/7519))
1. Fix for changing a file in the status bar to a notebook/jupyter file to open the new native notebook editor.
   ([#7521](https://github.com/Microsoft/vscode-python/issues/7521))
1. Running a cell by clicking the mouse should behave like shift+enter and move to the next cell (or add one to the bottom).
   ([#7522](https://github.com/Microsoft/vscode-python/issues/7522))
1. Output color makes a text only notebook with a lot of cells hard to read. Change output color to be the same as the background like Jupyter does.
   ([#7526](https://github.com/Microsoft/vscode-python/issues/7526))
1. Fix data viewer sometimes showing no data at all (especially on small datasets).
   ([#7530](https://github.com/Microsoft/vscode-python/issues/7530))
1. First run of run all cells doesn't run the first cell first.
   ([#7558](https://github.com/Microsoft/vscode-python/issues/7558))
1. Saving an untitled notebook editor doesn't change the tab to have the new file name.
   ([#7561](https://github.com/Microsoft/vscode-python/issues/7561))
1. Closing and reopening a notebook doesn't reset the execution count.
   ([#7565](https://github.com/Microsoft/vscode-python/issues/7565))
1. After restarting kernel, variables don't reset in the notebook editor.
   ([#7573](https://github.com/Microsoft/vscode-python/issues/7573))
1. CTRL+1/CTRL+2 had stopped working in the interactive window.
   ([#7597](https://github.com/Microsoft/vscode-python/issues/7597))
1. Ensure the insiders prompt only shows once.
   ([#7606](https://github.com/Microsoft/vscode-python/issues/7606))
1. Added prompt to flip "inheritEnv" setting to false to fix conda activation issue.
   ([#7607](https://github.com/Microsoft/vscode-python/issues/7607))
1. Toggling line numbers and output was not possible in the notebook editor.
   ([#7610](https://github.com/Microsoft/vscode-python/issues/7610))
1. Align execution count with first line of a cell.
   ([#7611](https://github.com/Microsoft/vscode-python/issues/7611))
1. Fix debugging cells to work when the python executable has spaces in the path.
   ([#7627](https://github.com/Microsoft/vscode-python/issues/7627))
1. Add switch channel commands into activationEvents to fix `command 'Python.swichToDailyChannel' not found`.
   ([#7636](https://github.com/Microsoft/vscode-python/issues/7636))
1. Goto cell code lens was not scrolling.
   ([#7639](https://github.com/Microsoft/vscode-python/issues/7639))
1. Make interactive window and native take their `fontSize` and `fontFamily` from the settings in VS Code.
   ([#7624](https://github.com/Microsoft/vscode-python/issues/7624))
1. Fix a hang in the Interactive window when connecting guest to host after the host has already started the interactive window.
   ([#7638](https://github.com/Microsoft/vscode-python/issues/7638))
1. When there's no workspace open, use the directory of the opened file as the root directory for a Jupyter session.
   ([#7688](https://github.com/Microsoft/vscode-python/issues/7688))
1. Allow the language server to pick a default caching mode.
   ([#7821](https://github.com/Microsoft/vscode-python/issues/7821))

### Code Health

1. Use jsonc-parser instead of strip-json-comments.
   (thanks [Mikhail Bulash](https://github.com/mikeroll/))
   ([#4819](https://github.com/Microsoft/vscode-python/issues/4819))
1. Remove `donjamayanne.jupyter` integration.
   (thanks [Mikhail Bulash](https://github.com/mikeroll/))
   ([#6052](https://github.com/Microsoft/vscode-python/issues/6052))
1. Drop `python.updateSparkLibrary` command.
   (thanks [Mikhail Bulash](https://github.com/mikeroll/))
   ([#6091](https://github.com/Microsoft/vscode-python/issues/6091))
1. Re-enabled smoke tests (refactored in `node.js` with [puppeteer](https://github.com/GoogleChrome/puppeteer)).
   ([#6511](https://github.com/Microsoft/vscode-python/issues/6511))
1. Handle situations where language client is disposed earlier than expected.
   ([#6865](https://github.com/Microsoft/vscode-python/issues/6865))
1. Put Data science functional tests that use real jupyter into their own test pipeline.
   ([#7066](https://github.com/Microsoft/vscode-python/issues/7066))
1. Send telemetry for what language server is chosen.
   ([#7109](https://github.com/Microsoft/vscode-python/issues/7109))
1. Add telemetry to measure debugger start up performance.
   ([#7332](https://github.com/Microsoft/vscode-python/issues/7332))
1. Decouple the DS location tracker from the debug session telemetry.
   ([#7352](https://github.com/Microsoft/vscode-python/issues/7352))
1. Test scaffolding for notebook editor.
   ([#7367](https://github.com/Microsoft/vscode-python/issues/7367))
1. Add functional tests for notebook editor's use of the variable list.
   ([#7369](https://github.com/Microsoft/vscode-python/issues/7369))
1. Tests for the notebook editor for different mime types.
   ([#7371](https://github.com/Microsoft/vscode-python/issues/7371))
1. Split Cell class for different views.
   ([#7376](https://github.com/Microsoft/vscode-python/issues/7376))
1. Refactor Azure Pipelines to use stages.
   ([#7431](https://github.com/Microsoft/vscode-python/issues/7431))
1. Add unit tests to guarantee that the extension version in the main branch has the '-dev' suffix.
   ([#7471](https://github.com/Microsoft/vscode-python/issues/7471))
1. Add a smoke test for the `Interactive Window`.
   ([#7653](https://github.com/Microsoft/vscode-python/issues/7653))
1. Download PTVSD wheels (for the new PTVSD) as part of CI.
   ([#7028](https://github.com/Microsoft/vscode-python/issues/7028))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.9.1 (6 September 2019)

### Fixes

1. Fixes to automatic scrolling on the interactive window.
   ([#6580](https://github.com/Microsoft/vscode-python/issues/6580))

## 2019.9.0 (3 September 2019)

### Enhancements

1. Get "select virtual environment for the workspace" prompt to show up regardless of pythonpath setting.
   ([#5499](https://github.com/Microsoft/vscode-python/issues/5499))
1. Changes to telemetry with regards to discovery of python environments.
   ([#5593](https://github.com/Microsoft/vscode-python/issues/5593))
1. Update Jedi to 0.15.1 and parso to 0.5.1.
   ([#6294](https://github.com/Microsoft/vscode-python/issues/6294))
1. Moved Language Server logging to its own output channel.
   ([#6559](https://github.com/Microsoft/vscode-python/issues/6559))
1. Interactive window will only snap to the bottom if the user is already in the bottom, like a chat window.
   ([#6580](https://github.com/Microsoft/vscode-python/issues/6580))
1. Add debug command code lenses when in debug mode.
   ([#6672](https://github.com/Microsoft/vscode-python/issues/6672))
1. Implemented prompt for survey.
   ([#6752](https://github.com/Microsoft/vscode-python/issues/6752))
1. Add code gathering tools.
   ([#6810](https://github.com/Microsoft/vscode-python/issues/6810))
1. Added a setting called 'Run Magic Commands'. The input should be python code to be executed when the interactive window is loading.
   ([#6842](https://github.com/Microsoft/vscode-python/issues/6842))
1. Added a setting so the user can decide if they want the debugger to debug only their code, or also debug external libraries.
   ([#6870](https://github.com/Microsoft/vscode-python/issues/6870))
1. Implemented prompt for survey using A/B test framework.
   ([#6957](https://github.com/Microsoft/vscode-python/issues/6957))

### Fixes

1. Delete the old session immediatly after session restart instead of on close
   ([#6975](https://github.com/Microsoft/vscode-python/issues/6975))
1. Add support for the "pathMappings" setting in "launch" debug configs.
   ([#3568](https://github.com/Microsoft/vscode-python/issues/3568))
1. Supports error codes like ABC123 as used in plugins.
   ([#4074](https://github.com/Microsoft/vscode-python/issues/4074))
1. Fixes to insertion of commas when inserting generated debug configurations in `launch.json`.
   ([#5531](https://github.com/Microsoft/vscode-python/issues/5531))
1. Fix code lenses shown for pytest.
   ([#6303](https://github.com/Microsoft/vscode-python/issues/6303))
1. Make data viewer change row height according to font size in settings.
   ([#6614](https://github.com/Microsoft/vscode-python/issues/6614))
1. Fix miniconda environments to work.
   ([#6802](https://github.com/Microsoft/vscode-python/issues/6802))
1. Drop dedent-on-enter for "return" statements. It will be addressed in https://github.com/microsoft/vscode-python/issues/6564.
   ([#6813](https://github.com/Microsoft/vscode-python/issues/6813))
1. Show PTVSD exceptions to the user.
   ([#6818](https://github.com/Microsoft/vscode-python/issues/6818))
1. Tweaked message for restarting VS Code to use a Python Extension insider build
   (thanks [Marsfan](https://github.com/Marsfan)).
   ([#6838](https://github.com/Microsoft/vscode-python/issues/6838))
1. Do not execute empty code cells or render them in the interactive window when sent from the editor or input box.
   ([#6839](https://github.com/Microsoft/vscode-python/issues/6839))
1. Fix failing functional tests (for pytest) in the extension.
   ([#6940](https://github.com/Microsoft/vscode-python/issues/6940))
1. Fix ptvsd typo in descriptions.
   ([#7097](https://github.com/Microsoft/vscode-python/issues/7097))

### Code Health

1. Update the message and the link displayed when `Language Server` isn't supported.
   ([#5969](https://github.com/Microsoft/vscode-python/issues/5969))
1. Normalize path separators in stack traces.
   ([#6460](https://github.com/Microsoft/vscode-python/issues/6460))
1. Update `package.json` to define supported languages for breakpoints.
   Update telemetry code to hardcode Telemetry Key in code (removed from `package.json`).
   ([#6469](https://github.com/Microsoft/vscode-python/issues/6469))
1. Functional tests for DataScience Error Handler.
   ([#6697](https://github.com/Microsoft/vscode-python/issues/6697))
1. Move .env file handling into the extension. This is in preparation to switch to the out-of-proc debug adapter from ptvsd.
   ([#6770](https://github.com/Microsoft/vscode-python/issues/6770))
1. Track enablement of a test framework.
   ([#6783](https://github.com/Microsoft/vscode-python/issues/6783))
1. Track how code was sent to the terminal (via `command` or `UI`).
   ([#6801](https://github.com/Microsoft/vscode-python/issues/6801))
1. Upload coverage reports to [codecov](https://codecov.io/gh/microsoft/vscode-python).
   ([#6938](https://github.com/Microsoft/vscode-python/issues/6938))
1. Bump version of [PTVSD](https://pypi.org/project/ptvsd/) to `4.3.2`.

    - Fix an issue with Jump to cursor command. [#1667](https://github.com/microsoft/ptvsd/issues/1667)
    - Fix "Unable to find threadStateIndex for the current thread" message in terminal. [#1587](https://github.com/microsoft/ptvsd/issues/1587)
    - Fixes crash when using python 3.7.4. [#1688](https://github.com/microsoft/ptvsd/issues/1688)
      ([#6961](https://github.com/Microsoft/vscode-python/issues/6961))

1. Move nightly functional tests to use mock jupyter and create a new pipeline for flakey tests which use real jupyter.
   ([#7066](https://github.com/Microsoft/vscode-python/issues/7066))
1. Corrected spelling of name for method to be `hasConfigurationFileInWorkspace`.
   ([#7072](https://github.com/Microsoft/vscode-python/issues/7072))
1. Fix functional test failures due to new WindowsStoreInterpreter addition.
   ([#7081](https://github.com/Microsoft/vscode-python/issues/7081))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.8.0 (6 August 2019)

### Enhancements

1. Added ability to auto update Insiders build of extension.
   ([#2772](https://github.com/Microsoft/vscode-python/issues/2772))
1. Add an icon for the "Run Python File in Terminal" command.
   ([#5321](https://github.com/Microsoft/vscode-python/issues/5321))
1. Hook up ptvsd debugger to Jupyter UI.
   ([#5900](https://github.com/Microsoft/vscode-python/issues/5900))
1. Improved keyboard and screen reader support for the data explorer.
   ([#6019](https://github.com/Microsoft/vscode-python/issues/6019))
1. Provide code mapping service for debugging cells.
   ([#6318](https://github.com/Microsoft/vscode-python/issues/6318))
1. Change copy back to code button in the interactive window to insert wherever the current selection is.
   ([#6350](https://github.com/Microsoft/vscode-python/issues/6350))
1. Add new 'goto cell' code lens on every cell that is run from a file.
   ([#6359](https://github.com/Microsoft/vscode-python/issues/6359))
1. Allow for cancelling all cells when an error occurs. Backed by 'stopOnError' setting.
   ([#6366](https://github.com/Microsoft/vscode-python/issues/6366))
1. Added Code Lens and Snippet to add new cell.
   ([#6367](https://github.com/Microsoft/vscode-python/issues/6367))
1. Support hitting breakpoints in actual source code for interactive window debugging.
   ([#6376](https://github.com/Microsoft/vscode-python/issues/6376))
1. Give the option to install ptvsd if user is missing it and tries to debug.
   ([#6378](https://github.com/Microsoft/vscode-python/issues/6378))
1. Add support for remote debugging of Jupyter cells.
   ([#6379](https://github.com/Microsoft/vscode-python/issues/6379))
1. Make the input box more visible to new users.
   ([#6381](https://github.com/Microsoft/vscode-python/issues/6381))
1. Add feature flag `python.dataScience.magicCommandsAsComments` so linters and other tools can work with them.
   (thanks [Janosh Riebesell](https://github.com/janosh))
   ([#6408](https://github.com/Microsoft/vscode-python/issues/6408))
1. Support break on enter for debugging a cell.
   ([#6449](https://github.com/Microsoft/vscode-python/issues/6449))
1. instead of asking the user to select an installer, we now autodetect the environment being used, and use that installer.
   ([#6569](https://github.com/Microsoft/vscode-python/issues/6569))
1. Remove "Debug cell" action from data science code lenses for markdown cells.
   (thanks [Janosh Riebesell](https://github.com/janosh))
   ([#6588](https://github.com/Microsoft/vscode-python/issues/6588))
1. Add debug command code lenses when in debug mode
   ([#6672](https://github.com/Microsoft/vscode-python/issues/6672))

### Fixes

1. Fix `executeInFileDir` for when a file is not in a workspace.
   (thanks [Bet4](https://github.com/bet4it/))
   ([#1062](https://github.com/Microsoft/vscode-python/issues/1062))
1. Fix indentation after string literals containing escaped characters.
   ([#4241](https://github.com/Microsoft/vscode-python/issues/4241))
1. The extension will now prompt to auto install jupyter in case its not found.
   ([#5682](https://github.com/Microsoft/vscode-python/issues/5682))
1. Append `--allow-prereleases` to black installation command so pipenv can properly resolve it.
   ([#5756](https://github.com/Microsoft/vscode-python/issues/5756))
1. Remove existing positional arguments when running single pytest tests.
   ([#5757](https://github.com/Microsoft/vscode-python/issues/5757))
1. Fix shift+enter to work when code lens are turned off.
   ([#5879](https://github.com/Microsoft/vscode-python/issues/5879))
1. Prompt to insall test framework only if test frame is not already installed.
   ([#5919](https://github.com/Microsoft/vscode-python/issues/5919))
1. Trim stream text output at the server to prevent sending massive strings of overwritten data.
   ([#6001](https://github.com/Microsoft/vscode-python/issues/6001))
1. Detect `shell` in Visual Studio Code using the Visual Studio Code API.
   ([#6050](https://github.com/Microsoft/vscode-python/issues/6050))
1. Make long running output not crash the extension host. Also improve perf of streaming.
   ([#6222](https://github.com/Microsoft/vscode-python/issues/6222))
1. Opting out of telemetry correctly opts out of A/B testing.
   ([#6270](https://github.com/Microsoft/vscode-python/issues/6270))
1. Add error messages if data_rate_limit is exceeded on remote (or local) connection.
   ([#6273](https://github.com/Microsoft/vscode-python/issues/6273))
1. Add pytest-xdist's -n option to the list of supported pytest options.
   ([#6293](https://github.com/Microsoft/vscode-python/issues/6293))
1. Simplify the import regex to minimize performance overhead.
   ([#6319](https://github.com/Microsoft/vscode-python/issues/6319))
1. Clarify regexes used for decreasing indentation.
   ([#6333](https://github.com/Microsoft/vscode-python/issues/6333))
1. Add new plot viewer button images and fix button colors in different themes.
   ([#6336](https://github.com/Microsoft/vscode-python/issues/6336))
1. Update telemetry property name for Jedi memory usage.
   ([#6339](https://github.com/Microsoft/vscode-python/issues/6339))
1. Fix png scaling on non standard DPI. Add 'enablePlotViewer' setting to allow user to render PNGs instead of SVG files.
   ([#6344](https://github.com/Microsoft/vscode-python/issues/6344))
1. Do best effort to download the experiments and use it in the very first session only.
   ([#6348](https://github.com/Microsoft/vscode-python/issues/6348))
1. Linux can pick the wrong kernel to use when starting the interactive window.
   ([#6375](https://github.com/Microsoft/vscode-python/issues/6375))
1. Add missing keys for data science interactive window button tooltips in `package.nls.json`.
   ([#6386](https://github.com/Microsoft/vscode-python/issues/6386))
1. Fix overwriting of cwd in the path list when discovering tests.
   ([#6417](https://github.com/Microsoft/vscode-python/issues/6417))
1. Fixes a bug in pytest test discovery.
   (thanks Rainer Dreyer)
   ([#6463](https://github.com/Microsoft/vscode-python/issues/6463))
1. Fix debugging to work on restarting the jupyter kernel.
   ([#6502](https://github.com/Microsoft/vscode-python/issues/6502))
1. Escape key in the interactive window moves to the delete button when auto complete is open. Escape should only move when no autocomplete is open.
   ([#6507](https://github.com/Microsoft/vscode-python/issues/6507))
1. Render plots as png, but save an svg for exporting/image viewing. Speeds up plot rendering.
   ([#6526](https://github.com/Microsoft/vscode-python/issues/6526))
1. Import get_ipython at the start of each imported jupyter notebook if there are line magics in the file
   ([#6574](https://github.com/Microsoft/vscode-python/issues/6574))
1. Fix a problem where we retrieved and rendered old codelenses for multiple imports of jupyter notebooks if cells in the resultant import file were executed without saving the file to disk.
   ([#6582](https://github.com/Microsoft/vscode-python/issues/6582))
1. PTVSD install for jupyter debugging should check version without actually importing into the jupyter kernel.
   ([#6592](https://github.com/Microsoft/vscode-python/issues/6592))
1. Fix pandas version parsing to handle strings.
   ([#6595](https://github.com/Microsoft/vscode-python/issues/6595))
1. Unpin the version of ptvsd in the install and add `-U`.
   ([#6718](https://github.com/Microsoft/vscode-python/issues/6718))
1. Fix stepping when more than one blank line at the end of a cell.
   ([#6719](https://github.com/Microsoft/vscode-python/issues/6719))
1. Render plots as png, but save an svg for exporting/image viewing. Speeds up plot rendering.
   ([#6724](https://github.com/Microsoft/vscode-python/issues/6724))
1. Fix random occurrences of output not concatenating correctly in the interactive window.
   ([#6728](https://github.com/Microsoft/vscode-python/issues/6728))
1. In order to debug without '#%%' defined in a file, support a Debug Entire File.
   ([#6730](https://github.com/Microsoft/vscode-python/issues/6730))
1. Add support for "Run Below" back.
   ([#6737](https://github.com/Microsoft/vscode-python/issues/6737))
1. Fix the 'Variables not available while debugging' message to be more descriptive.
   ([#6740](https://github.com/Microsoft/vscode-python/issues/6740))
1. Make breakpoints on enter always be the case unless 'stopOnFirstLineWhileDebugging' is set.
   ([#6743](https://github.com/Microsoft/vscode-python/issues/6743))
1. Remove Debug Cell and Run Cell from the command palette. They should both be 'Debug Current Cell' and 'Run Current Cell'
   ([#6754](https://github.com/Microsoft/vscode-python/issues/6754))
1. Make the dataviewer open a window much faster. Total load time is the same, but initial response is much faster.
   ([#6729](https://github.com/Microsoft/vscode-python/issues/6729))
1. Debugging an untitled file causes an error 'Untitled-1 cannot be opened'.
   ([#6738](https://github.com/Microsoft/vscode-python/issues/6738))
1. Eliminate 'History\_\<guid\>' from the problems list when using the interactive panel.
   ([#6748](https://github.com/Microsoft/vscode-python/issues/6748))

### Code Health

1. Log processes executed behind the scenes in the extension output panel.
   ([#1131](https://github.com/Microsoft/vscode-python/issues/1131))
1. Specify `pyramid.scripts.pserve` when creating a debug configuration for Pyramid
   apps instead of trying to calculate the location of the `pserve` command.
   ([#2427](https://github.com/Microsoft/vscode-python/issues/2427))
1. UI Tests using [selenium](https://selenium-python.readthedocs.io/index.html) & [behave](https://behave.readthedocs.io/en/latest/).
   ([#4692](https://github.com/Microsoft/vscode-python/issues/4692))
1. Upload coverage reports to [coveralls](https://coveralls.io/github/microsoft/vscode-python).
   ([#5999](https://github.com/Microsoft/vscode-python/issues/5999))
1. Upgrade Jedi to version 0.13.3.
   ([#6013](https://github.com/Microsoft/vscode-python/issues/6013))
1. Add unit tests for `client/activation/serviceRegistry.ts`.
   ([#6163](https://github.com/Microsoft/vscode-python/issues/6163))
1. Remove `test.ipynb` from the root folder.
   ([#6212](https://github.com/Microsoft/vscode-python/issues/6212))
1. Fail the `smoke tests` CI job when the smoke tests fail.
   ([#6253](https://github.com/Microsoft/vscode-python/issues/6253))
1. Add a bunch of perf measurements to telemetry.
   ([#6283](https://github.com/Microsoft/vscode-python/issues/6283))
1. Retry failing debugger test (retry due to intermittent issues on `Azure Pipelines`).
   ([#6322](https://github.com/Microsoft/vscode-python/issues/6322))
1. Update version of `isort` to `4.3.21`.
   ([#6369](https://github.com/Microsoft/vscode-python/issues/6369))
1. Functional test for debugging jupyter cells.
   ([#6377](https://github.com/Microsoft/vscode-python/issues/6377))
1. Consolidate telemetry.
   ([#6451](https://github.com/Microsoft/vscode-python/issues/6451))
1. Removed npm package `vscode`, and added to use `vscode-test` and `@types/vscode` (see [here](https://code.visualstudio.com/updates/v1_36#_splitting-vscode-package-into-typesvscode-and-vscodetest) for more info).
   ([#6456](https://github.com/Microsoft/vscode-python/issues/6456))
1. Fix the variable explorer exclude test to be less strict.
   ([#6525](https://github.com/Microsoft/vscode-python/issues/6525))
1. Merge ArgumentsHelper unit tests into one file.
   ([#6583](https://github.com/Microsoft/vscode-python/issues/6583))
1. Fix jupyter remote tests to respect new notebook 6.0 output format.
   ([#6625](https://github.com/Microsoft/vscode-python/issues/6625))
1. Unit Tests for DataScience Error Handler.
   ([#6670](https://github.com/Microsoft/vscode-python/issues/6670))
1. Fix DataExplorer tests after accessibility fixes.
   ([#6711](https://github.com/Microsoft/vscode-python/issues/6711))
1. Bump version of [PTVSD](https://pypi.org/project/ptvsd/) to 4.3.0.
   ([#6771](https://github.com/Microsoft/vscode-python/issues/6771))
    - Support for Jupyter debugging
    - Support for ipython cells
    - API to enable and disable tracing via ptvsd.tracing
    - ptvsd.enable_attach accepts address=('localhost', 0) and returns server port
    - Known issue: Unable to find threadStateIndex for the current thread. curPyThread ([#11587](https://github.com/microsoft/ptvsd/issues/1587))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort](https://pypi.org/project/isort/)
-   [jedi](https://pypi.org/project/jedi/)
    and [parso](https://pypi.org/project/parso/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.6.1 (9 July 2019)

### Fixes

1. Fixes to A/B testing.
   ([#6400](https://github.com/microsoft/vscode-python/issues/6400))

## 2019.6.0 (25 June 2019)

### Enhancements

1. Dedent selected code before sending it to the terminal.
   ([#2837](https://github.com/Microsoft/vscode-python/issues/2837))
1. Allow password for remote authentication.
   ([#3624](https://github.com/Microsoft/vscode-python/issues/3624))
1. Add support for sub process debugging, when debugging tests.
   ([#4525](https://github.com/Microsoft/vscode-python/issues/4525))
1. Change title of `Discover Tests` to `Discovering` when discovering tests.
   ([#4562](https://github.com/Microsoft/vscode-python/issues/4562))
1. Add an extra viewer for plots in the interactive window.
   ([#4967](https://github.com/Microsoft/vscode-python/issues/4967))
1. Allow for self signed certificates for jupyter connections.
   ([#4987](https://github.com/Microsoft/vscode-python/issues/4987))
1. Add support for A/B testing and staged rollouts of new functionality.
   ([#5042](https://github.com/Microsoft/vscode-python/issues/5042))
1. Removed `--nothreading` flag from the `Django` debug configuration.
   ([#5116](https://github.com/Microsoft/vscode-python/issues/5116))
1. Test Explorer : Remove time from all nodes except the tests.
   ([#5120](https://github.com/Microsoft/vscode-python/issues/5120))
1. Add support for a copy back to source.
   ([#5286](https://github.com/Microsoft/vscode-python/issues/5286))
1. Add visual separation between the variable explorer and the rest of the Interactive Window content.
   ([#5389](https://github.com/Microsoft/vscode-python/issues/5389))
1. Changes placeholder label in testConfigurationManager.ts from 'Select the directory containing the unit tests' to 'Select the directory containing the tests'.
   (thanks [James Flynn](https://github.com/james-flynn-ie/))
   ([#5602](https://github.com/Microsoft/vscode-python/issues/5602))
1. Updated labels in File > Preferences > Settings. It now states 'Pytest' where it stated 'Py Test'.
   (thanks [James Flynn](https://github.com/james-flynn-ie/))
   ([#5603](https://github.com/Microsoft/vscode-python/issues/5603))
1. Updated label for "Enable unit testing for Pytest" to remove the word "unit".
   (thanks [James Flynn](https://github.com/james-flynn-ie/))
   ([#5604](https://github.com/Microsoft/vscode-python/issues/5604))
1. Importing a notebook should show the output of the notebook in the Python Interactive window. This feature can be turned off with the 'previewImportedNotebooksInInteractivePane' setting.
   ([#5675](https://github.com/Microsoft/vscode-python/issues/5675))
1. Add flag to auto preview an ipynb file when opened.
   ([#5790](https://github.com/Microsoft/vscode-python/issues/5790))
1. Change pytest description from configuration menu.
   ([#5832](https://github.com/Microsoft/vscode-python/issues/5832))
1. Support faster restart of the kernel by creating two kernels (two python processes running under the covers).
   ([#5876](https://github.com/Microsoft/vscode-python/issues/5876))
1. Allow a 'Dont ask me again' option for restarting the kernel.
   ([#5951](https://github.com/Microsoft/vscode-python/issues/5951))
1. Added experiment to always display the test explorer.
   ([#6211](https://github.com/Microsoft/vscode-python/issues/6211))

### Fixes

1. Added support for activation of conda environments in `powershell`.
   ([#668](https://github.com/Microsoft/vscode-python/issues/668))
1. Provide `pathMappings` to debugger when attaching to child processes.
   ([#3568](https://github.com/Microsoft/vscode-python/issues/3568))
1. Add virtualenvwrapper default virtual environment location to the `python.venvFolders` config setting.
   ([#4642](https://github.com/Microsoft/vscode-python/issues/4642))
1. Advance to the next cell if cursor is in the current cell and user clicks 'Run Cell'.
   ([#5067](https://github.com/Microsoft/vscode-python/issues/5067))
1. Fix localhost path mappings to lowercase the drive letter on Windows.
   ([#5362](https://github.com/Microsoft/vscode-python/issues/5362))
1. Fix import/export paths to be escaped on windows.
   ([#5386](https://github.com/Microsoft/vscode-python/issues/5386))
1. Support loading larger dataframes in the dataviewer (anything more than 1000 columns will still be slow, but won't crash).
   ([#5469](https://github.com/Microsoft/vscode-python/issues/5469))
1. Fix magics running from a python file.
   ([#5537](https://github.com/Microsoft/vscode-python/issues/5537))
1. Change scrolling to not animate to workaround async updates breaking the animation.
   ([#5560](https://github.com/Microsoft/vscode-python/issues/5560))
1. Add support for opening hyperlinks from the interactive window.
   ([#5630](https://github.com/Microsoft/vscode-python/issues/5630))
1. Remove extra padding in the dataviewer.
   ([#5653](https://github.com/Microsoft/vscode-python/issues/5653))
1. Add 'Add empty cell to file' command. Shortcut for having to type '#%%'.
   ([#5667](https://github.com/Microsoft/vscode-python/issues/5667))
1. Add 'ctrl+enter' as a keyboard shortcut for run current cell (runs without advancing)
   ([#5673](https://github.com/Microsoft/vscode-python/issues/5673))
1. Adjust input box prompt to look more an IPython console prompt.
   ([#5729](https://github.com/Microsoft/vscode-python/issues/5729))
1. Jupyter-notebook exists after shutdown.
   ([#5731](https://github.com/Microsoft/vscode-python/issues/5731))
1. Fix horizontal scrolling in the Interactive Window.
   ([#5734](https://github.com/Microsoft/vscode-python/issues/5734))
1. Fix problem with using up/down arrows in autocomplete.
   ([#5774](https://github.com/Microsoft/vscode-python/issues/5774))
1. Fix latex and markdown scrolling.
   ([#5775](https://github.com/Microsoft/vscode-python/issues/5775))
1. Add support for jupyter controls that clear.
   ([#5801](https://github.com/Microsoft/vscode-python/issues/5801))
1. Fix up arrow on signature help closing the help.
   ([#5813](https://github.com/Microsoft/vscode-python/issues/5813))
1. Make the interactive window respect editor cursor and blink style.
   ([#5814](https://github.com/Microsoft/vscode-python/issues/5814))
1. Remove extra overlay on editor when matching parentheses.
   ([#5815](https://github.com/Microsoft/vscode-python/issues/5815))
1. Fix theme color missing errors inside interactive window.
   ([#5827](https://github.com/Microsoft/vscode-python/issues/5827))
1. Fix problem with shift+enter not working after using goto source.
   ([#5829](https://github.com/Microsoft/vscode-python/issues/5829))
1. Fix CI failures related to history import changes.
   ([#5844](https://github.com/Microsoft/vscode-python/issues/5844))
1. Disable quoting of paths sent to the debugger as arguments.
   ([#5861](https://github.com/Microsoft/vscode-python/issues/5861))
1. Fix shift+enter to work in newly created files with cells.
   ([#5879](https://github.com/Microsoft/vscode-python/issues/5879))
1. Fix nightly failures caused by new jupyter command line.
   ([#5883](https://github.com/Microsoft/vscode-python/issues/5883))
1. Improve accessibility of the 'Python Interactive' window.
   ([#5884](https://github.com/Microsoft/vscode-python/issues/5884))
1. Auto preview notebooks on import.
   ([#5891](https://github.com/Microsoft/vscode-python/issues/5891))
1. Fix liveloss test to not have so many dependencies.
   ([#5909](https://github.com/Microsoft/vscode-python/issues/5909))
1. Fixes to detection of the shell.
   ([#5916](https://github.com/Microsoft/vscode-python/issues/5916))
1. Fixes to activation of Conda environments.
   ([#5929](https://github.com/Microsoft/vscode-python/issues/5929))
1. Fix themes in the interactive window that use 3 color hex values (like Cobalt2).
   ([#5950](https://github.com/Microsoft/vscode-python/issues/5950))
1. Fix jupyter services node-fetch connection issue.
   ([#5956](https://github.com/Microsoft/vscode-python/issues/5956))
1. Allow selection and running of indented code in the python interactive window.
   ([#5983](https://github.com/Microsoft/vscode-python/issues/5983))
1. Account for files being opened in Visual Studio Code that do not belong to a workspace.
   ([#6624](https://github.com/Microsoft/vscode-python/issues/6624))
1. Accessibility pass on plot viewer
   ([#6020](https://github.com/Microsoft/vscode-python/issues/6020))
1. Allow for both password and self cert server to work together
   ([#6265](https://github.com/Microsoft/vscode-python/issues/6265))
1. Fix pdf export in release bits.
   ([#6277](https://github.com/Microsoft/vscode-python/issues/6277))

### Code Health

1. Add code coverage reporting.
   ([#4472](https://github.com/Microsoft/vscode-python/issues/4472))
1. Minimize data sent as part of the `ERROR` telemetry event.
   ([#4602](https://github.com/Microsoft/vscode-python/issues/4602))
1. Fixes to decorator tests.
   ([#5085](https://github.com/Microsoft/vscode-python/issues/5085))
1. Add sorting test for DataViewer.
   ([#5415](https://github.com/Microsoft/vscode-python/issues/5415))
1. Rename "unit test" to "tests" from drop menu when clicking on "Run Tests" on the status bar.
   ([#5605](https://github.com/Microsoft/vscode-python/issues/5605))
1. Added telemetry to track memory usage of the `Jedi Language Server` process.
   ([#5726](https://github.com/Microsoft/vscode-python/issues/5726))
1. Fix nightly functional tests from timing out during process cleanup.
   ([#5870](https://github.com/Microsoft/vscode-python/issues/5870))
1. Change how telemetry is sent for the 'shift+enter' banner.
   ([#5887](https://github.com/Microsoft/vscode-python/issues/5887))
1. Fixes to gulp script used to bundle the extension with `WebPack`.
   ([#5932](https://github.com/Microsoft/vscode-python/issues/5932))
1. Tighten up the import-matching regex to minimize false-positives.
   ([#5988](https://github.com/Microsoft/vscode-python/issues/5988))
1. Merge multiple coverage reports into one.
   ([#6000](https://github.com/Microsoft/vscode-python/issues/6000))
1. Fix DataScience nightly tests.
   ([#6032](https://github.com/Microsoft/vscode-python/issues/6032))
1. Update version of TypeScript to 3.5.
   ([#6033](https://github.com/Microsoft/vscode-python/issues/6033))

### Thanks

Thanks to the following projects which we fully rely on to provide some of
our features:

-   [isort 4.3.20](https://pypi.org/project/isort/4.3.20/)
-   [jedi 0.12.0](https://pypi.org/project/jedi/0.12.0/)
    and [parso 0.2.1](https://pypi.org/project/parso/0.2.1/)
-   [Microsoft Python Language Server](https://github.com/microsoft/python-language-server)
-   [ptvsd](https://pypi.org/project/ptvsd/)
-   [exuberant ctags](http://ctags.sourceforge.net/) (user-installed)
-   [rope](https://pypi.org/project/rope/) (user-installed)

Also thanks to the various projects we provide integrations with which help
make this extension useful:

-   Debugging support:
    [Django](https://pypi.org/project/Django/),
    [Flask](https://pypi.org/project/Flask/),
    [gevent](https://pypi.org/project/gevent/),
    [Jinja](https://pypi.org/project/Jinja/),
    [Pyramid](https://pypi.org/project/pyramid/),
    [PySpark](https://pypi.org/project/pyspark/),
    [Scrapy](https://pypi.org/project/Scrapy/),
    [Watson](https://pypi.org/project/Watson/)
-   Formatting:
    [autopep8](https://pypi.org/project/autopep8/),
    [black](https://pypi.org/project/black/),
    [yapf](https://pypi.org/project/yapf/)
-   Interpreter support:
    [conda](https://conda.io/),
    [direnv](https://direnv.net/),
    [pipenv](https://pypi.org/project/pipenv/),
    [pyenv](https://github.com/pyenv/pyenv),
    [venv](https://docs.python.org/3/library/venv.html#module-venv),
    [virtualenv](https://pypi.org/project/virtualenv/)
-   Linting:
    [bandit](https://pypi.org/project/bandit/),
    [flake8](https://pypi.org/project/flake8/),
    [mypy](https://pypi.org/project/mypy/),
    [prospector](https://pypi.org/project/prospector/),
    [pylint](https://pypi.org/project/pylint/),
    [pydocstyle](https://pypi.org/project/pydocstyle/),
    [pylama](https://pypi.org/project/pylama/)
-   Testing:
    [nose](https://pypi.org/project/nose/),
    [pytest](https://pypi.org/project/pytest/),
    [unittest](https://docs.python.org/3/library/unittest.html#module-unittest)

And finally thanks to the [Python](https://www.python.org/) development team and
community for creating a fantastic programming language and community to be a
part of!

## 2019.5.18875 (6 June 2019)

### Fixes

1. Disable quoting of paths sent to the debugger as arguments.
   ([#5861](https://github.com/