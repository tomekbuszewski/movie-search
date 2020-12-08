# Movie Search

—
Live preview: [https://tomekbuszewski.github.io/movie-search/#/][1]

—

A small application built mostly with React and Styled Components, based on [ts-react-starter][2] for simplicity.

> **Why not CRA?**
> I have everything configured in my started, from directories, to testing, to code generators, to linters. I cut down probably 60-75% time needed for preparation using starter of my own making.

## Architecture choices

This app is built with scaling in mind. With that said, in its current state it doesn’t really benefit from clear routing structure or atomic design methodology for UI. But, after adding couple of pages, maybe introducing some state management etc., it will make a lot more sense. I just don’t want to rebuild half of my app few months in because of a wrong assumption.

Every page (currently only one) is a separated entity that follows a standard structure of having view, typings and logic separated. Main file consists of all the bindings that internal or external effects may require (for example, handles state, connections to vendors etc.). Typing is a simple helper that exposes interfaces and enums, and view emits JSX.

Another layer are services (also, currently only one), hiding any logic that isn’t crucial behind a facade. For brevity, I didn’t create a full-fledged fetching service, but just a shell to expand in the future.

Then there is UI, built using Atomic Design by Brad Frost. Given the fact that this app is very thin when it comes to styles, it again may seem overblown, but again – it scales very well, so it’s more future-proof than a single `components` or `ui` directory with components thrown in.

Last but not least, there is `@typings/contracts` which houses all the DTOs for communication. Current backend doesn’t really have a lot of this, so two files are enough. If need arise, it can be expanded greatly into more complex structure.

## Testing

There is not much to do here in terms of unit testing. So I’ve decided to create a larger suite for smoke testing. It uses MSW for mocking backend, apart from that, it’s all living application. Currently, it tests whether input element works, whether proper messages are shown regarding the backend communication and finally, checks if successful response is rendered properly.

Mocks are taken from the live client, so they are in sync, at least at the time of creation. It’s important to remember that tests (and all that comes with them) is a living matter in the project, so they will have to be updated constantly.

## Development

For developing this app, I’ve chosen Storybook for UI and Plop for code generating. The latter comes very handy in early stages, when there are a lot of small components that take more time to create physically than to actually write. Former, a well known library in React community, is basically a standard for working with UI layer in separation.

Apart from this, there is ESLint and Prettier used in order to maintain a steady code standards with proper formatting.

[1]:	https://tomekbuszewski.github.io/movie-search/#/
[2]:	https://github.com/tomekbuszewski/ts-react-starter